# The Global Click

[My Notes](notes.md)

Everyone in the world contributes to clicking a button, over and over. 
Potential features include: 
* Global leaderboard, with a username/password login
* Unlockable skins for the button after reaching certain milestones. Some are global, some are personal.
* A lucky umbrella, occasionally sent out by the server, which is worth 100 clicks!
* A banner ad so I can make millions
* Whatever else this class requires

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] Proper use of Markdown
- [ ] A concise and compelling elevator pitch
- [ ] Description of key features
- [ ] Description of how you will use each technology
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Clicker games are usually a solitary experience. You click, make an arbitrary number go up, then buy upgrades. Usually these upgrades just make it all happen automatically. Quickly, the number of 'clicks' has lost its sanctity and no longer truly represents a click of the mouse. 
Global Click seeks to restore the sanctity of a 'click' and instead allow for a cooperative experience, where everyone contributes to making the arbitrary number go up.

### Game Design

![Game Design Image](GameDesignPic.jpg)

The initial login page has nothing particularly special, just a logo with the option to login or register.
The game page is a familiar setup, with a big button in the middle begging to be clicked. This is how almost every game in the genre does it. Underneath, there is a regularly updated tally of the number of times every player has clicked the button, along with the user's individual clicks made. There is a leaderboard, displaying the top 5 (maybe top 10) users (with their score, of course) and the user's own placement.

### Server Design
![Server Design Image](ServerDesignPic.jpg)
Due to the high volume of both users and 'clicks performed', it is more practical to have users send and receive updates periodically (between 1-60s, depending on what I find the server can handle). That means, instead of making a call everytime the user clicks, it will send a call with a sum of the number of clicks done within the timeframe.
The server will periodically send the user the global number of clicks made, along with the leaderboard in a similar timeframe.

### Key features

- A big button to click!
- Secure login over HTTPS
- A global tally, showing in realtime how many times the button has been clicked globally
- A leaderboard, displaying who has contributed the most to the global click tally.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - To handle the basic structure. 2 pages are anticipated, one for login and one for the game itself.
- **CSS** - To style and offer light animation. More importantly, to allow the website page to properly accomodate multiple aspect ratios and resolutions.
- **React** - To handle the logic for login, registration, and logout. Also, I anticipate it is where I will implement the logic for clicking the button (along with other potential game additions).
- **Service** - To offer endpoints for various API calls. This includes:
    - Registration, login, and logout (you are not allowed to click the button unless if you are logged in)
    - To retrieve an individual user's click tally
    - To retrieve the global click tally
    - To send a sum of all clicks made by the user within a timeframe.
    - To contact a 3rd party api to... set the background color! (I honestly will probably perform more research on potential 3rd party APIs to call)
- **DB/Login** - To store users, along with how many times they have clicked the button.
- **WebSocket** - To provide realtime feed of global clicks.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
