# RESTful API Activity - [JinahonShienaMarieB._3D]

## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: Putting it in `.env` makes it easier to change the base URI without editing the code. It keeps the configuration separate and flexible for different environments like dev or production.

**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer: Plural nouns are used because the routes represent collections of resources. It follows REST conventions and makes the API more intuitive - `/dishes` clearly refers to multiple dish items.

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Answer: `201` is used when creating a new resource with POST since something new was added. `200` is used for GET and PUT operations because they're just retrieving or updating existing data.

- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: `404` specifically indicates that the requested resource doesn't exist. An empty array just means no results, which is different from "not found." It provides clearer feedback and makes debugging easier.

**4. Testing:**
![GET Request Screenshot](src/image/screenshot.png)
