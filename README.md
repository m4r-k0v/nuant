# Nuant FE Test

Project uses vite react-ts template which provides a minimal setup to get React working in Vite with ESLint rules.

### Additional libraries used:
* React Query (used for data fetching, caching, and infinite scrolling)
* Prettier (code formatting)
* React testing library
* happy-dom (used for testing)

### How to run the project
1. Clone the repository
2. Run `yarn install`
3. Run `yarn run dev`
4. Check the terminal for the url and port on which app is running.
5. Run tests using `yarn run test`

### Features
- Search for Pokemon by `name` and the posibility to filter the results by `type`
- View Pokemon details by clicking on a search result
- View previous search results when navigating back to the search page from the pokemon details page
- When user is on details page and he clicks on type pill eg. Fire he will be navigated to home page that will use this as a filter
- Details page will show Name, different sprites, weight, height and basic information together with species info (just some basic text)
- Infinite scrolling to load more pokemons
- Application is responsive
- Most of UI components are tested
-
### Questions
#### What part of building the project was the most difficult? Why?
Personally I would say getting to know the API and it's limitations. Some things are inconsistent like pagination
and some things are linked making it a bit of research task to gather details.

#### How long did it take to have this test completed ? Which part of the test took you longer? Could you specify roughly the amount of time it took you to do the following:
- Set up environment
- - less than 5 minutes
- Search feature
- - 2 hours
- Filter feature
- - 1 hour
- Result display
- - 3-4 hour (with infinite scroll)
- Details page
- - 3 hours
- Test
- - 2 hours
