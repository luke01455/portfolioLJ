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
            imageUrl: 'https://media.giphy.com/media/kafnIzCJ12DsEMu5W1/source.mov',
            id: 1,
            linkUrl: '',
            description: 'Crwn Clothing is an e-commerce site, made in react, using firebase for google login'
          },
          {
            title: 'Repeat-Mobile',
            imageUrl: 'https://media.giphy.com/media/gdfcoij5piIdVFV4mJ/giphy.gif',
            id: 2,
            linkUrl: '',
            description: 'This is going to be the mobile front-end version for our android repeat application which records sound on a loop'

          },
          {
            title: 'Forkify',
            imageUrl: 'https://media.giphy.com/media/iesTI3bXamSEAhRuRr/source.mov',
            id: 3,
            linkUrl: '',
            description: 'Made following a Udemy tutorial, Forkify searches an API for recipes, displays the ingredients, lets you add a meal to your favourites, and puts the ingredients in a shopping cart'
          },
          {
            title: 'Budgety',
            imageUrl: 'https://media.giphy.com/media/dyA3vxeewhadJQxDsK/source.mov',
            id: 4,
            linkUrl: '',
            description: 'Made following a Udemy tutorial, budgety lets you plan out this months budget, by letting you add expenses, and add incomes, you can also remove anything youve added'
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