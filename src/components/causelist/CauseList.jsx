import React from 'react';
import './causelist.css';
import Causes from '../causes/Causes';

const CauseList = () => {
  return (
    <div className='listscroll masked-overflow'>
        <div className='causelist'>
            <Causes title="Save the Birds" cover="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200"/>
            <Causes title="Save the Turtles" cover="https://cdn.britannica.com/66/195966-138-F9E7A828/facts-turtles.jpg?w=800&h=450&c=crop"/>
            <Causes title="Climate Change" cover="https://youmatter.world/app/uploads/sites/2/2018/10/climate-change-definition-meaning.jpg"/>
            <Causes title="Garbage Island" cover="https://static01.nyt.com/images/2022/05/06/science/06sci-garbagepatch1/06sci-garbagepatch1-videoSixteenByNine3000.jpg"/>
            <Causes title="The Amazon Rainforest" cover="https://www.andbeyond.com/wp-content/uploads/sites/5/Amazon-Rain-Forest.jpg"/>
            <Causes title="Clean Energy" cover="https://etimg.etb2bimg.com/photo/68846824.cms"/>
            <Causes title="Seabin Project" cover="https://www.cnet.com/a/img/resize/b586a2335fe7a222d97e007d4c976ef2c77a9b6a/hub/2018/01/26/339f2773-4d2a-49a0-89ca-14cfe30c18d4/seabin-30-1.jpg?auto=webp&fit=crop&height=630&width=1200"/>
            <Causes title="Artic Preservation" cover="https://cdn.mos.cms.futurecdn.net/QhUHUWbXfnRiMJiCh5m6YW.jpg"/>
            <Causes title="Clean Water" cover="https://media.springernature.com/w735h400/nature-cms/uploads/cms/pages/10832/top_item_image/clean_water_hero-a8e79231f173b836c45a621b15a0633f.jpg"/>
            <Causes title="Feeding Africa" cover="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/NRT_200214_2521.jpg?crop=0%2C105%2C7721%2C4825&wid=1640&hei=1025&scl=4.707926829268293"/>
        </div>
        <div class="fadedScroller_fade_top"></div>
        <div class="fadedScroller_fade_bottom"></div>
    </div>
  )
}

export default CauseList;