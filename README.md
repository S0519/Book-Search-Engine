# Book Search Engine


## Description 
Book Search Engine is an application which allows te user to search books


## Demo 
![demain1](https://user-images.githubusercontent.com/80322588/129079499-3912a842-fe59-4f80-a442-abc4cf0d3b6b.png)
![demain2](https://user-images.githubusercontent.com/80322588/129079507-c0287cde-bf35-49d6-9a5b-ca6fe17ff815.png)

![501](https://user-images.githubusercontent.com/80322588/129079542-e1bfd765-6dea-4d30-98ac-eac9d8cbcce2.png)
![502](https://user-images.githubusercontent.com/80322588/129079550-0aeb13bf-d366-4985-b867-dbebecaea012.png)


## URL
* https://book-search-engine-sara.herokuapp.com/?fbclid=IwAR32ugpx5ZssPe-I_G84YpAWcotZrudeFvLCwSjNqBTMd3y_KhnBTumycng

 



			* `login`: Accepts an email and password as parameters; returns an `Auth` type.

			* `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

			* `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

			* `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.

		* `User` type:

			* `_id`

			* `username`

			* `email`

			* `bookCount`

			* `savedBooks` (This will be an array of the `Book` type.)

		* `Book` type:

			* `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

			* `authors` (An array of strings, as there may be more than one author.)

			* `description`

			* `title`

			* `image`

			* `link`

		* `Auth` type:

			* `token`

			* `user` (References the `User` type.)
