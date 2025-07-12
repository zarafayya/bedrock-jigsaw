import { system } from "@minecraft/server";

system.runInterval(() => {
    console.error("test")
}, 1)