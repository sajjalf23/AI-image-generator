import { createContext, useState } from "react";

export const Imagecontext = createContext();

export function Imageprovider({ children }) {
    const [prompt, setprompt] = useState("");
    const [model, setmodel] = useState("");
    const [height, setheight] = useState(null);
    const [width, setwidth] = useState(null);
    const [sample, setsample] = useState(null);
    const [img, setimg] = useState([]);
    const [loading, setloading] = useState(false);

    const Generateimg = async () => {
        if (!prompt || !height || !width || !model || !sample) {
            alert("Please fill in all fields before generating.");
            return;
        }

        setloading(true);
        try {
            const requests = [];

            for (let i = 0; i < sample; i++) {
                const formData = new FormData();
                formData.append("prompt", prompt);
                formData.append("model", model);
                formData.append("width", width);
                formData.append("height", height);
                formData.append("steps", 30);
                formData.append("cfg_scale", 7);

                requests.push(
                    fetch(import.meta.env.VITE_STABILITY_API_URL, {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
                            // ❌ DON'T manually set Content-Type when using FormData
                            "Accept": "application/json",
                        },
                        body: formData,
                    }).then(res => res.json())
                );
            }

            const responses = await Promise.all(requests);
            const base64Imgs = responses.map(data => data.image);
            setimg(base64Imgs.map(img => `data:image/png;base64,${img}`));

        } catch (error) {
            console.error("API error:", error);
            alert(`Something went wrong: ${error.message}`);
        } finally {
            setloading(false);
        }
    };





    return (
        <Imagecontext.Provider value={{
            prompt, setprompt,
            model, setmodel,
            height, setheight,
            width, setwidth,
            sample, setsample,
            img, setimg,
            loading, setloading,
            Generateimg
        }}>
            {children}
        </Imagecontext.Provider>
    );
}
