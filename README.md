# FancyTodo-server

Todo-list with add, update, delete, or search features.


* **URL**

     /todos

* **Method:**

  `GET` | `POST` | `PUT` | `DELETE`


 **GET:**

   * **Success Response:**
     * **Code:** 200 <br />
     **Content:** 
         ```
           {
            "alldata": 
                [
                    {
                        "id": 1,
                        "title": "test one",
                        "description": "tester",
                        "status": "Done",
                        "due_date": "2020-04-11T17:00:00.000Z",
                        "UserId": null,
                        "createdAt": "2020-04-01T08:27:27.895Z",
                        "updatedAt": "2020-04-01T08:30:23.007Z"
                    },
                    {
                        "id": 2,
                        "title": "todo test1",
                        "description": "test todo",
                        "status": "Undone",
                        "due_date": "2020-04-11T17:00:00.000Z",
                        "UserId": null,
                        "createdAt": "2020-04-01T09:36:20.017Z",
                        "updatedAt": "2020-04-01T09:36:20.017Z"
                    }
                ]
            }
         ```


  * **Error Response:**
    * **Code:** 500 INTERNAL ERROR <br />
      **Content:** `{ error : "Internal Server Error" }`



<br/>



**POST:**

  ***URL Params:***
  * **Required:** `id=[integer]`
  
  **Request Body:**
  * **Required:** `{title: 'string', description: 'string', status: 'Undone', due_date: 'date' }`

  **Success Response:**
  * **Code:** 201 <br />
      **Content:** 
      ```
        {
            "alldata":
            [
                {
                    "id":3,
                    "title":"coba edit 3",
                    "description":"edit percobaan ke 3",
                    "status":"Done",
                    "due_date":"2020-04-11T17:00:00.000Z",
                    "UserId": null,
                    "createdAt":"2020-03-30T11:12:33.999Z",
                    "updatedAt":"2020-03-30T12:18:45.973Z"
                }
            ]
        }
      ```

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

  ***URL Params:***
  * **Required:** `id=[integer]`

  **Request Body:**
  * **Required:** `{title: 'string', description: 'string', status: 'Undone', due_date: 'date' }`

  **Success Response:**
  * **Code:** 201 <br />
      **Content:** 
      ```
            {
                "alldata":
                [
                    {
                        "id":3,
                        "title":"coba edit 3",
                        "description":"edit percobaan ke 3",
                        "status":"Done",
                        "due_date":"2020-04-11T17:00:00.000Z",
                        "UserId": null,
                        "createdAt":"2020-03-30T11:12:33.999Z",
                        "updatedAt":"2020-03-30T12:18:45.973Z"
                    }
                ]
            }
      ```


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

  ***URL Params:***
  * **Required:** `id=[integer]`

  **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
     ```
        {
            "alldata":
            [
                {
                    "id":3,
                    "title":"coba edit 3",
                    "description":"edit percobaan ke 3",
                    "status":"Done",
                    "due_date":"2020-04-11T17:00:00.000Z",
                    "UserId": null,
                    "createdAt":"2020-03-30T11:12:33.999Z",
                    "updatedAt":"2020-03-30T12:18:45.973Z"
                }
            ]
        }
     ```


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

  ***URL Params:***
  * **Required:** `id=[integer]`


  **Success Response:**
  * **Code:** 200 <br />
    **Content:** 
      ```
            {
                "alldata":
                [
                    {
                        "id": 2,
                        "title": "todo test1",
                        "description": "test todo",
                        "status": "Undone",
                        "due_date": "2020-04-11T17:00:00.000Z",
                        "UserId": null,
                        "createdAt": "2020-04-01T09:36:20.017Z",
                        "updatedAt": "2020-04-01T09:36:20.017Z"
                    }
                ]
            }
      ```

  **Error Response:**
  * **Code:** 404 ERROR NOT FOUND <br />
    **Content:** `{ error : "Data Not Found" }`

    **OR**

  **Error Response:**
  * **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`


<br/>