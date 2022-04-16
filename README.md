<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability
*** Reference links are enclosed in brackets [ ] instead of parentheses ( )
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/BiaDd/hoohacks2022">
    <img src="./client/src/pages/navbar/images/plant.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Greenery!</h3>

  <p align="center">
    A plant caretaking app that Gamify and Simplifies!
    <br />
    <a href="https://github.com/BiaDd/hoohacks2022"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BiaDd/hoohacks2022">View Demo</a>
    ·
    <a href="https://github.com/BiaDd/hoohacks2022/issues">Report Bug</a>
    ·
    <a href="https://github.com/BiaDd/hoohacks2022/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

![homepage](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/884/596/datas/original.png)


## Inspiration

We wanted to make a project that would allow the user to make an impact while also competing with others and having fun. It is eminently easy to keep forgetting to water the plants and not having the data for it in front of you, so we built a web app that provides reminders to the user so the user does not forget to water their plants, and also provides them with their plant's data. There is also a point system to make it more fun, and users can earn points by watering their plants!

## What it does

The user can log in and add plants to keep track of. Reminders are sent to the user using Twilio which allows the user to water their plants daily, and also the data for their plants are collected from an API that presents the user with all of the information! There is also a user's homepage where a chart is displayed for the user's plants, and the tasks required for them to do on a daily/weekly basis.

## How we built it

The project uses a frontend React UI connected to an Express.js backend with a SQL database. The login system uses SHA256 encryption to avoid plaintext passwords stored in the database. We also used the Twilio API to send push notifications to users as reminders to water their plants. Image hosting was also included using Cloudinary so users can submit pictures of their plant to the website. Styling on the frontend was accomplished primarily with Bootstrap.

## Challenges we ran into

Half of our team are first-time hackathon participants, so the rush of completing features and using GitHub at a fast pace was difficult to get accustomed to. But having a few veterans on our team helped us organize and develop our project given the time constraint.

## Accomplishments that we're proud of

We are proud to create a web app that works towards a good cause, as it allows the user to effectively take care of their plants, and present them with their data. We are also proud of building a system where the user is able to receive daily reminders to water their plants.

## What we learned

We further strengthened our skills in the technologies we used such as express.js and Twilio. Some of the team members did not have much experience with these technologies, so building a project using these technologies really helped them learn it.

## What's next for GrowWithMe

We hope to add more features such as a leveling up system which allows the user to level up as they gain XP points! Also, it would be cool to implement a hardware component where there could be smart planter that transmits soil/plant health information to the application.

Features:
* Plant caretaking system :smile:
* Twillio - notification system
* Point System
* Social Aspect 

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* React.js
* Express.js
* Node.js
* HTML/CSS (Bootstrap)
* JavaScript
* MySQL
* Twilio 


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Add Sign up
- [X] Add Login
- [X] Add Calendar
- [ ] Add Social Aspect



<p align="right">(<a href="#top">back to top</a>)</p>





<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [GitHub README.md template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/BiaDd/hoohacks2022?color=%23&style=for-the-badge
[contributors-url]: https://github.com/BiaDd/hoohacks2022/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/BiaDd/hoohacks2022?style=for-the-badge
[issues-url]: https://github.com/BiaDd/hoohacks2022/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/BiaDd/hoohacks2022/blob/main/LICENSE.txt
[product-screenshot]: loginpage.png
