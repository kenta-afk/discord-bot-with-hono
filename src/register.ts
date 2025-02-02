import { Command, Option, register } from 'discord-hono'

const commands = [
    new Command('hello', 'response world'),
    new Command('omikuji', 'Kind words from jo-ji'),
    new Command('konayuki', 'konayuki song by jo-ji'),
    new Command('youtube', 'youtube link'),
    new Command('ohayou', 'response ohayou'),
    new Command('help', 'response help').options(new Option('text', 'with text')),
]

register(
    commands,
    process.env.DISCORD_APPLICATION_ID,
    process.env.DISCORD_TOKEN,
    //process.env.DISCORD_TEST_GUILD_ID,
)