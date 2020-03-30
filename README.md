# FancyTodo-server

Todo-list with add, update, delete, or search features.


* **URL**

     /todos

* **Method:**

  `GET` | `POST` | `PUT` | `DELETE`


 **GET:**

   * **Example:**

        ```javascript
        router.get('/', TodoController.findAll)
        ```

   * **Success Response:**
     * **Code:** 200 <br />
     **Content:** 
                `{"alldata":[{"id":1,"title":"coba","description":"nyoba doang","status":"belom","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"},{"id":2,"title":"coba2","description":"nyoba doang2","status":"belom","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"}]}` <br />


  * **Error Response:**
    * **Code:** 500 INTERNAL ERROR <br />
      **Content:** `{ error : "Internal Server Error" }`



<br/>



**POST:**

   * **Example:**

        ```javascript
        router.post('/', TodoController.create)
        ```

  **Success Response:**
  * **Code:** 201 <br />
      **Content:** 
                `{"alldata":[{"id":3,"title":"coba3","description":"nyoba doang3","status":"belom","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"}]}`

  **Error Response:**
  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** `{ error : "Validation Error" }`

    **OR**

  **Error Response:**
  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

<br/>

**PUT:**

  * **URL**

     /todos/:id


    * **Example:**

        ```javascript
        router.put('/:id', TodoController.update)
        ```


  **Success Response:**
  * **Code:** 201 <br />
      **Content:** 
                `{"alldata":[{"id":2,"title":"coba2","description":"nyoba doang2","status":"sudah","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"}]}`

  **Error Response:**
  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "Data Not Found" }`

    **OR**
  
  **Error Response:**
  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** `{ error : "Validation Error" }`

    **OR**

  **Error Response:**
  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

<br/>

**DELETE:**

  * **URL**

     /todos/:id

    * **Example:**

        ```javascript
        router.delete('/:id', TodoController.delete)
        ```

  **Success Response:**
  * **Code:** 200 <br />
      **Content:** 
                `{"alldata":[{"id":2,"title":"coba2","description":"nyoba doang2","status":"sudah","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"}]}`

  **Error Response:**
  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "Data Not Found" }`

    **OR**
  

  **Error Response:**
  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`

<br/>

**GET BY ID:**

  * **URL**

     /todos/:id

    * **Example:**

        ```javascript
        router.get('/:id', TodoController.findOne)
        ```

  **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
                `{"alldata":[{"id":1,"title":"coba","description":"nyoba doang","status":"belom","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"},{"id":2,"title":"coba2","description":"nyoba doang2","status":"belom","due_date":"2020-04-11T17:00:00.000Z","createdAt":"2020-03-30T11:12:33.999Z","updatedAt":"2020-03-30T12:03:32.973Z"}]}` <br />

  **Error Response:**
  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "Data Not Found" }`

    **OR**

  **Error Response:**
  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


<br/>