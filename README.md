# evolution-assignment
# Rules
The goal of the puzzle is to rotate the tiles on the map to make all pipes connected in a single group, with no loops and no dangling pipes.
# Built with
- React 
- Typescript
- React Redux
- Redux Toolkit
# Details
### Level Passwords (Work in progress)
# Known Limitations of the Solution
Due to the heavy load and high number of cells in levels +3, the UX is not going to render on the dom
#Key Design Decisions I've Made
- To reduce server call and also optimization server loads, all the rotations are handle on the client side, all rotation steps will be saved in a queue and when user try to verify the result, the final rotaion string will be sent.
- The user will not experience any delay and lagging during rotations cause the the rotations are handled on client side
- The other advantage is about the optimization during sending final rotaions, it works as below :
When user starts to rotate one cell till get back to original postion based on initial map from server, all the rotates about this cell will be removed to send lighter request to server  
# Accessing the project
The demo will be available on following link :
[Demo](https://classy-torte-2b9b5e.netlify.app/)
