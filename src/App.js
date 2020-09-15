import React from 'react';
import Header from "./Components/Header"
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import { Switch, Route, Redirect } from 'react-router-dom';
import Technologies from './Components/Technologies';
import Educations from './Components/Educations';
import Contacts from './Components/Contacts';


function App(props) {
  let handleScroll = function (event) {
    const routes = props.info.links.map(el => `/${el.adres}`)
    let actualIDRoutes = routes.indexOf(window.location.pathname)
     if (window.scrollY + 10 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
       let nextIDRoutes = actualIDRoutes + 1
       if (nextIDRoutes >= routes.length) nextIDRoutes = 0
       console.log(window.scrollY +" scroll",document.documentElement.scrollHeight-document.documentElement.clientHeight);
       window.location.pathname = routes[nextIDRoutes]
     }

   }
  function ac () {
    window.addEventListener('scroll', handleScroll)
  }
  ac ()
  const linksForNotHome = props.info.links
    .map((el, index) => {
      if ({ el } !== 'home')
        return `/${el.adres}`
      else
        return false
    }
    )
  return (
    <React.Fragment>
      <nav> <Navigation links={props.info.links} /></nav>
      <Switch>
        <Route exact path='/home'>
          <Header contacts={props.info.contacts} />
        </Route>
        <Route exact path={linksForNotHome}>
          <main>
            <article>
              <section className="flex-container">
                <Route id="about-me" exact path='/about-me'>
                  <AboutMe info={props.info.infoAboutMe} />
                </Route>
                <Route id="technologies" exact path='/technologies' >
                  <Technologies tech={props.info.tech} />
                </Route>
                <Route exact path='/educations' >
                  <Educations educations={props.info.educations} />
                </Route>
                <Route exact path='/contacts' >
                  <Contacts contacts={props.info.contacts} />
                </Route>
              </section>
            </article>
            <div className="photo"/>
          </main>
        </Route>
        <Redirect from='*' to='/home' />
      </Switch>
    </React.Fragment >
  );
}

export default App;
