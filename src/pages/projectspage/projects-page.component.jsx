import React from 'react';
import ProjectItem from '../../components/project-item/project-item.components';
import './projects-page.styles.scss';

class ProjectsPage extends React.Component {
   constructor(){
       super();


       this.state = {
        sections: [
        {
            title: 'Crwn-Clothing',
            imageUrl: '<iframe src="https://giphy.com/embed/kafnIzCJ12DsEMu5W1" height=100% frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
            id: 1,
            linkUrl: '',
            description: 'Crwn Clothing is an e-commerce site, made in react, using firebase for google login',
            gitHub: 'https://github.com/luke01455/crwn-clothing',
            deploy: 'https://luke01455.github.io/crwn-clothing/#/'
          },
          {
            title: 'Repeat-Mobile',
            imageUrl: '<iframe src="https://giphy.com/embed/gdfcoij5piIdVFV4mJ" height=100% frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
            id: 2,
            linkUrl: '',
            description: 'This is going to be the mobile front-end version for our android repeat application which records sound on a loop',
            gitHub: 'https://github.com/luke01455/repeat-mobile2',
            deploy: 'https://luke01455.github.io/repeat-mobile2/#/'

          },
          {
            title: 'Forkify',
            imageUrl: '<iframe src="https://giphy.com/embed/iesTI3bXamSEAhRuRr" height=100% frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
            id: 3,
            linkUrl: '',
            description: 'Made following a Udemy tutorial, Forkify searches an API for recipes, displays the ingredients, lets you add a meal to your favourites, and puts the ingredients in a shopping cart',
            gitHub: 'https://github.com/luke01455/forkify',
            deploy: 'https://luke01455.github.io/forkify/'
          },
          {
            title: 'Budgety',
            imageUrl: '<iframe src="https://giphy.com/embed/dyA3vxeewhadJQxDsK" height=100% frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',
            id: 4,
            linkUrl: '',
            description: 'Made following a Udemy tutorial, budgety lets you plan out this months budget, by letting you add expenses and incomes, you can also remove anything youve added',
            gitHub: 'https://github.com/luke01455/budgety',
            deploy: ''
          }
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