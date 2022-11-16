# TaskAi

Organizing your schedule made easy. Never miss a task. Never miss an appointment. Never be late for one too. Keep track of your day, week, and year all in one platform. Collaborate with others and never miss a beat.

## Repo Owner

Vraj Shah

## Project Manager

Robert Diasio

Welcome to [RedwoodJS](https://redwoodjs.com)!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Then change into that directory and start the development server:

```
cd my-redwood-project
yarn redwood dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page, which links out to a ton of great resources.

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command!
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal:
>
> ```
> yarn redwood --help
> ```
>
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

## Prisma and the database

Redwood wouldn't be a full-stack framework without a database. It all starts with the schema. Open the [`schema.prisma`](api/db/schema.prisma) file in `api/db` and replace the `UserExample` model with the following `Post` model:

```
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev

# ...

? Enter a name for the new migration: › create posts
```

> `rw` is short for `redwood`

You'll be prompted for the name of your migration. `create posts` will do.

Now let's generate everything we need to perform all the CRUD (Create, Retrieve, Update, Delete) actions on our `Post` model:

```
yarn redwood g scaffold post
```

Navigate to http://localhost:8910/posts/new, fill in the title and body, and click "Save":

Did we just create a post in the database? Yup! With `yarn rw g scaffold <model>`, Redwood created all the pages, components, and services necessary to perform all CRUD actions on our posts table.

## Frontend first with Storybook

Don't know what your data models look like?
That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data.
Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Before you start, see if the CLI's `setup ui` command has your favorite styling library:

```
yarn rw setup ui --help
```

## Testing with Jest

It'd be hard to scale from side project to startup without a few tests.
Redwood fully integrates Jest with the front and the backends and makes it easy to keep your whole app covered by generating test files with all your components and services:

```
yarn rw test
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing.md#scenarios)  and [GraphQL mocking](https://redwoodjs.com/docs/testing.md#mocking-graphql-calls).

## Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth!
Lock down your front and backends with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third party auth providers:

```
yarn rw setup auth --help
```

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing)

## The Database Schema

Our database is composed of two tables: `Task`, and `User`.

#### **User Table**

The **`User`** table consists of the account information, namely the email, name, and password, of people who currently have an account with us. The schema for it is as follows:

| Field   | Data Type |             |
| ------- | --------- | ----------- |
| id      | Int       | Primary Key |
| email   | String    | Unique      |
| pasword | String    |             |
| name    | String    |             |

The `schema.prisma` syntax used to create this table:

> ```
> model User {
>  id       Int     @id @default(autoincrement())
>  email    String  @unique
>  password String
>  name     String?
> }
> ```

#### **Task Table**

The `Task` table holds the data about a task for a user with ID of `userID`. Each task in the table points to a user in the `User` table. The schema for it is as follows:

| Field         | Data Type |             |
| ------------- | --------- | ----------- |
| id            | Int       | Primary Key |
| userID        | Int       | Foreign Key |
| title         | String    |             |
| description   | String    |             |
| duration      | Int       |             |
| priority      | Int       |             |
| completed     | Boolean   |             |
| dueDate       | DateTime  |             |
| createdAt     | DateTime  |             |
| isAppointment | Boolean   |             |

The `schema.prisma` syntax used to create this table:

> ```
> model Task {
>  id            Int      @id @default(autoincrement())
>  userID        Int
>  isAppointment Boolean  @default(false)
>  title         String
>  description   String
>  duration      Int
>  priority      Int
>  completed     Boolean  @default(false)
>  dueDate       DateTime @default(now())
>  createdAt     DateTime @default(now())
> }
> ```

## Accessing Database Data

Interacting with and accesing the data in the Task table is done through CRUD operations:

#### **Creating a Task**

> ```javascript
> export const createTask = ({ input }) => {
>  return db.task.create({
>    data: input,
>  })
> }
> ```

Create a task using the `input` data. `input` is a dictionary. The required input data is `userID`, `title`, `description`, `duration`, and `priority`.

Example of a valid `input` dictionary:

> ```javascript
>       data: {
>         userID: 6090835,
>         title: 'String',
>         description: 'String',
>         duration: 6181799,
>         priority: 4696712,
>       }
> ```

#### **Retrieving Tasks**

> ```javascript
> export const tasks = () => {
>  return db.task.findMany()
> }
> ```

Returns all tasks in the database.

> ```javascript
> export const task = ({ id }) => {
>  return db.task.findUnique({
>    where: { id },
>  })
> }
> ```

Returns the task in the database that contains ID `id`.

#### **Updating a Task**

> ```javascript
> export const updateTask = ({ id, input }) => {
>  return db.task.update({
>    data: input,
>    where: { id },
>  })
> }
> ```

Update the data of task with ID `id`, using the given `input` parameter.

#### **Deleting a Task**

> ```javascript
> export const deleteTask = ({ id }) => {
>  return db.task.delete({
>    where: { id },
>  })
> }
> ```

Deletes task with ID `id` from the database.

## Google Calendar API

In order to access the data stored on your Google Calendar and sync it with TaskAI, the Google Calendar API is leveraged.

* [Google Calendar Events Endpoint](https://developers.google.com/calendar/api/v3/reference/events)

## Appendix

* To learn more about Prisma:
  * [RedwoodJS Prisma Relations](https://redwoodjs.com/docs/schema-relations)
  * [Prisma Documentation](https://www.prisma.io/docs/getting-started)
* [Google Calendar API Documentation](https://developers.google.com/calendar/api/v3/reference)
  * [Calendar Events Endpoint Documentation](https://developers.google.com/calendar/api/v3/reference/events)
