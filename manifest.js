const Manifest = {
    registerType: "prompt",
    includeAssets: ["./src/assets/images/attach.png", "./src/assets/images/back.png", "./src/assets/images/document.png", "./src/assets/images/edit.png", "./src/assets/images/members.png", "./src/assets/images/Meme.png", "./src/assets/images/options.png", "./src/assets/images/phone.png", "./src/assets/images/photo.png", "./src/assets/images/report.png", "./src/assets/images/send.png", "./src/assets/images/video.png", "./src/assets/react.svg", "./public/icon.png"],
    manifest: {
    name: "Chat App PWA",
    short_name:"ChatApp",
    description: "An app that contains chats for the trip planned.",
    icons: [
    {
    src: "./src/assets/react.svg",
    sizes: "512x512",
    type: "image/png",
    purpose: "any maskable"
    },],
    theme_color: "#000000",
    background_color: "#esebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",

},
}
export default Manifest 