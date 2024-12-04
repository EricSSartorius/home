---
title: "Building a Web App Entirely with AI: My Journey"
description: "My hands-on (off?) experience trying to create a complete web app almost entirely using various AI tools"
date: '2024/12/04'
published: true
---

<br/>
Creating a web application can be a daunting task, but with the help of AI, I was able to streamline the process significantly. In this blog post, I’ll share my experience of building a digital menu generator called Meny (Swedish for Menu).
<br/>
<br/>

<!-- ![Meny Digital Menu Generator](/src/images/meny.png) -->

## The Frontend: Crafting the UI with AI

For the majority of the prompts, I had a lot of back and forth conversations with [Cursor](https://www.cursor.com/). And as for the user interface and frontend development, I utilized [V0](https://v0.dev). This AI tool proved to be incredibly accurate, especially when it came to building the homepage. I opted for a tech stack that included Tailwind CSS, React, and ShadCN. The AI-generated code was not only responsive but also came with a light/dark theme out of the box, which saved me a lot of time.

I found that I could use almost exactly what was provided by the AI prompts. The ease of creating a visually appealing and functional UI was a game-changer. One of the standout features was the ability to create nested forms using `react-hook-form`. I was pleasantly surprised by how well v0 handled this, allowing me to get things working without needing to modify much of the generated code.

## The Backend: Transitioning from Docker to Supabase

For the backend, I initially set up a stack that included Docker, Drizzle, PostgreSQL, and Next.js actions. However, I encountered some challenges along the way. While I tried to rely on AI prompts from Cursor for backend development, I often faced issues due to version mismatches and inaccuracies in the responses related to Next.js and Drizzle.

After some trial and error, I decided to switch from Docker to Supabase for a more straightforward deployment process. This change simplified my workflow and allowed me to focus more on building features rather than managing infrastructure.

## Overcoming Hurdles

Despite the advantages of using AI, I did face hurdles. The biggest challenge was ensuring that the AI-generated code was compatible with the latest versions of the libraries I was using. There were instances where the AI provided outdated or incorrect information, which required me to do additional research and troubleshooting.

## Current Status and Future Plans

From a product point of view, there is still many features that could be added to make this an actual working app. Cleaning up bugs and implementing payment processing would probably be the next steps if I was to make this into something worth deploying.

As of now however, the site is not live since this was an experiment and I am not ready to start paying for hosting. However, I might change my mind, finish it up and deploy it again in the near future. 

If you’re interested in the code, you can find it on [GitHub](https://github.com/purefunc/meny).

## Conclusion

Building a web application using AI was an enlightening experience. The combination of AI-generated code and my own adjustments allowed me to create a functional digital menu generator with relative ease. I was able to build an entire homepage, dashboard UI and a complex nested form system in close to 40 hours of work. While there were challenges, especially with the backend code, the benefits of using AI tools like Cursor and V0 far outweighed the drawbacks. I look forward to continuing to explore the capabilities of AI in software development and sharing my findings with the community.
<br/>

_Note: This entire blog post was also made with AI for the sake of speed but the contents of the post are all truthful and correct._