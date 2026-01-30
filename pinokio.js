module.exports = {
  version: "5.0",
  title: "OpenClaw Rabbit Launcher",
  icon: "icon.png",
  description: "Connect your Rabbit R1 device to OpenClaw (Formerly ClawdBot)",
  menu: async (kernel, info) => {
    return [{
      default: true,
      icon: "fa-solid fa-power-off",
      text: "Connect",
      href: "start.json"
    }]
  }
}
