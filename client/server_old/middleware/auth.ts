import {sha256} from "ohash";

export default defineEventHandler(async (event) => {
    const password = getCookie(event, "password");

    if (getRequestURL(event).pathname.startsWith('/api') && password != sha256("admin"))
        await event.respondWith(new Response("Not authorized", {status: 401}))
})