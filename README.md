# christmas-list

## Title 
Virtual Christmas List

## Description 
An app that lets a user submit Christmas wishes by category. The main page displays buttons with categories of gifts. The user selects one which then takes them to a page with a form where they submit their wish, and the wish is posted to the page along with other wishes that are submitted in that category.

## Wireframes
 https://whimsical.com/wishlist-4xGf3exZxynXbb7AA4mcLe

## Component Hierarchy
https://whimsical.com/wishlist-4xGf3exZxynXbb7AA4mcLe

## API
 I plan on having a table for each toy category and being able to fetch and post to each one, from each corresponding component.


Sample pull:

```
{
    "records": [
        {
            "id": "recNUB7eWm1VR0qHW",
            "fields": {},
            "createdTime": "2021-10-22T13:09:45.000Z"
        },
        {
            "id": "recOcl4fYKuCTpV24",
            "fields": {
                "Name": "Johnny",
                "City": "New York",
                "Electronics": "Iphone 18"
            },
            "createdTime": "2021-10-22T13:09:45.000Z"
        },
        {
            "id": "reciXzPJW4vjbz6a5",
            "fields": {
                "Name": "Lisa",
                "City": "Minneapolis",
                "Electronics": "Ipad"
            },
            "createdTime": "2021-10-22T13:09:45.000Z"
        }
    ]
}
```


## MVP
- Home page with buttons for each gift category that lead to a page with the respective feed
- Form that posts new wishes to each feed when submitted


## Post-MVP

- Add a slideshow/carousel with Christmas-y images for the main page


## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 22-23 | Proposal Approval / Airtable Setup         | Done |
| Oct 24   | Component Creation / Get, post data | Done |
| Oct 25   | Components cont'd            | Done |
| Oct 26   | Finish components/ begin CSS               |Done |
| Oct 27   | CSS cont'd, begin other styling reqs (media query, flexbox)                              | Done |
| Oct 28   |           Finish styling                    | Done |



## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |           |        |
| Airtable setup            |    H     |     .5hrs      |            |          |
| Buttons that route to components           |    H     |      2hrs      |            |         |
| Data population pg 1      |    H     |      3hrs      |           |        |
| Data population pg 2      |    H     |      3hrs      |           |         |
| Data population pg 3      |    H     |      3hrs      |           |         |
| Form creation pg 1        |    H     |      2hrs      |           |         |
| Form creation pg 2        |    H     |      2hrs      |           |         |
| Form creation pg 3        |    H     |      2hrs      |           |          |
| Data creation/update pg 1 |    H     |      3hrs      |           |         |
| Data creation/update pg 2 |    H     |      3hrs      |            |          |
| Data creation/update pg 3 |    H     |      3hrs      |            |          |
| Component CSS pg 1        |    H     |      3hrs      |           |        |
| Component CSS pg 2        |    H     |      3hrs      |           |        |
| Component CSS pg 3        |    H     |      3hrs      |          |         |
| Total                     |    H     |    37.5    |          |        |





## SWOT Analysis 
I feel fairly confident with react, my biggest concern is with having different components display specific data rather than having one display all of it as most of the homeworks have done. Seems that it shouldn't be too too difficult with airtable though since you can call specific tables which I think should make it fairly simple.
