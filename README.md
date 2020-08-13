Application created for the needs of the recruitment task for Chop Chop company. The application is an Post List app.

The post list is displayed in a list or grid system which is toggled by selecting above the content. 
It has also the ability to order lists by A-Z/Z-A and by selected post value (e.g. title, data, authorId).
List have pagination and ability to move user to page number contained in the URL link.

On the list, view posts have the ability to show excerpt and open modal which displays author information.

By clicking post title on the post list or the grid element on grid view we are moved to post details which consist of more data of the post.
It also has an author information modal and the ability to add a comment which is also displayed in a modal.


## app technologies

Post list application is built in react and has additional libraries such as redux, redux-saga, axios.

## app structure

The main app structure contains file structure typical of a create-react-app starter like public with index.html.

The src folder contains all of the project components, functions, and business logic.
```
src/
├── actions/
├── components/
│   ├── AuthorDetailsButton
│   ├── CommentModal
│   ├── Loader
│   ├── Modal
│   ├── Pagination
│   ├── containers
|   └──├── AppLayout
│   ├── pages
└── └──├── GatewayPage
    └──├── LoginPage
    └──├── MainPage
    └──├── NotFoundPage
    └──├── PostDetailsPage
    └──├── UserPage
```

## TODO
* login auth
* inform user about adding comment status
* comment modal timer
* unit tests
* snapshot test
* improve scss styles
