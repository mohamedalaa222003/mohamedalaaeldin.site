/* =====================================================================
   Site configuration — edit this file after deployment, no rebuild needed.
   ===================================================================== */
window.MAE_CONFIG = {
  /* Contact form endpoint. Any service that accepts a JSON POST and answers
     HTTP 200 on success works (e.g. Formspree "https://formspree.io/f/xxxxxxx",
     Getform, Basin, or your own serverless function).
     Leave "" and the form hands the inquiry to the visitor's e-mail app or
     clipboard instead — it never claims a message was sent. */
  formEndpoint: "",
  /* 3D models: "glb" fetches assets/models/<key>.glb (default, smallest, needs HTTP).
     "script" loads assets/models/file/<key>.js instead — only for hosts that refuse
     .glb files. Opening index.html from disk switches to "script" automatically. */
  modelTransport: "glb",
  /* Microsoft Clarity project ID (clarity.microsoft.com → Settings → Overview).
     "" turns analytics off. Never loads on localhost or from disk. */
     clarityId: "za1q6gogot"
};
