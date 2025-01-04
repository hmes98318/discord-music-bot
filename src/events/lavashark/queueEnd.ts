import { dashboard } from "../../dashboard";

import type { Client } from "discord.js";
import type { Player } from "lavashark";
import type { Bot } from "../../@types";


export default async (bot: Bot, _client: Client, player: Player) => {
    if (bot.config.bot.autoLeave.enabled) {
        await player.destroy();
    }

    await dashboard.destroy(bot, player, bot.config.bot.embedsColor);
};