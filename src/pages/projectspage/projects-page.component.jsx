import React from 'react';
import ProjectItem from '../../components/project-item/project-item.components';
import './projects-page.styles.scss';

class ProjectsPage extends React.Component {
   constructor(){
       super();


       this.state = {
        sections: [
          {
            title: 'Social Media App',
            imageUrl: 'https://i.imgur.com/73ZxrXB.jpg',
            id: 6,
            linkUrl: '',
            description: 'Using the MongoDb, Express, React, Node and Graphql stack. This is a CRUD webapp which utilitises fetching data from a MongoDB and Apollo backend, and publishing queries and mutations of the posts, comments and users on the frontend. UI/UX made with semantic UI',
            gitHub: 'https://github.com/luke01455/SocialMediaFrontend',
            deploy: 'https://keen-colden-0a4367.netlify.com/'
          },
          {
            title: 'Repeat-Mobile-3',
            imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
            id: 5,
            linkUrl: '',
            description: 'Made using react, redux, react-router, html, css, and linking to a java backend, this app lets users record on a loop for up to 20 minutes, and save if needed.',
            gitHub: 'https://github.com/luke01455/repeat-mobile3',
            deploy: 'https://crwn-datab.firebaseapp.com/'
          },
        {
            title: 'Crwn-Clothing',
            imageUrl: 'https://i.ibb.co/K9YLqc6/crwnclothingimg.jpg',
            id: 1,
            linkUrl: '',
            description: 'Crwn Clothing is an e-commerce site, made in react, using firebase for google login',
            gitHub: 'https://github.com/luke01455/crwn-clothing',
            deploy: 'https://crwn-clothing-lj.herokuapp.com/'
          },
          {
            title: 'Repeat-Mobile',
            imageUrl: 'https://i.ibb.co/B3PgK9h/repeat2img.jpg>',
            id: 2,
            linkUrl: '',
            description: 'This is going to be the mobile front-end version for our android repeat application which records sound on a loop',
            gitHub: 'https://github.com/luke01455/repeat-mobile2',
            deploy: 'https://luke01455.github.io/repeat-mobile2/#/'

          },
          {
            title: 'Forkify',
            imageUrl: 'https://i.ibb.co/Lr1Y8wV/forkifyimg.jpg',
            id: 3,
            linkUrl: '',
            description: 'Forkify searches an API for recipes, displays the ingredients, lets you add a meal to your favourites, and puts the ingredients in a shopping cart',
            gitHub: 'https://github.com/luke01455/forkify',
            deploy: 'https://luke01455.github.io/forkify/'
          },
          {
            title: 'Budgety',
            imageUrl: 'https://i.ibb.co/4SMpbt4/budgetyimg.jpg',
            id: 4,
            linkUrl: '',
            description: 'Budgety lets you plan out this months budget, by letting you add expenses and incomes, you can also remove anything youve added',
            gitHub: 'https://github.com/luke01455/budgety',
            deploy: 'https://github.com/luke01455/budgety'
          },
        ]
       }
   }

   render() {
    return (
        <div className='projects-page'>
           {
                this.state.sections.map(({ id, ...otherSectionProps}) => (
                     <ProjectItem key={id} {...otherSectionProps}/>
                ))}
        </div>
    )
}
}

export default ProjectsPage;