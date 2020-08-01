<template>
  <div id="app">
    <header>
      <!-- <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </nav> -->
      header
    </header>
    <router-view />
    <footer>footer</footer>
  </div>
</template>

<style lang="scss">
// general styles goes here
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  padding-top: 15px;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    li {
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        &.router-link-exact-active {
          color: #42b983;
        }
      }
      & + li {
        margin-left: 10px;
      }
    }
  }
}
footer,
header {
  text-align: center;
  padding: 15px;
}
</style>
