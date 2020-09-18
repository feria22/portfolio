import React, { Component } from 'react';
import Header from "./Components/Header"
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import Technologies from './Components/Technologies';
import Educations from './Components/Educations';
import Contacts from './Components/Contacts';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";




class App extends Component {
  routes = this.props.info.links.map(el => `/${el.adres}`)
  handleScroll(event) {
    setInterval(() => {
      const routes = this.routes
      let actualIDRoutes = routes.indexOf(this.props.location.pathname)
      if (window.scrollY + 1 > document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        let nextIDRoutes = actualIDRoutes + 1
        if (nextIDRoutes >= routes.length) nextIDRoutes = 0
        this.props.history.push({ pathname: routes[nextIDRoutes] })
        window.scrollTo(0, 0)
      }
    }, 2000);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
    window.addEventListener('touchmove', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('touchmove', this.handleScroll.bind(this))
  }

  linksForNotHome = this.props.info.links
    .map((el, index) => {
      if ({ el } !== 'home')
        return `/${el.adres}`
      else
        return false
    }
    )
  render() {

    return (
      <React.Fragment>
        <nav>
          <Navigation links={this.props.info.links} />
        </nav>
        <Switch>
          <Route exact path='/'>
            <Header contacts={this.props.info.contacts} />
          </Route>
          <Route exact path={this.linksForNotHome}>
            <main>

              <article>
                <section className={["flex-container"]}>

                  <Route id="about-me" exact path='/about-me'>
                    <AboutMe info={this.props.info.infoAboutMe} />
                  </Route>
                  <Route id="technologies" exact path='/technologies' >
                    <Technologies tech={this.props.info.tech} />
                  </Route>
                  <Route exact path='/educations' >
                    <Educations educations={this.props.info.educations} />
                  </Route>
                  <Route exact path='/contacts' >
                    <Contacts contacts={this.props.info.contacts} />
                  </Route>

                </section>
              </article>

              <div className="photo" />
            </main>
          </Route>
          <Redirect from='*' to='/' />
        </Switch>

      </React.Fragment>
    );
  }
}

export default withRouter(App);


