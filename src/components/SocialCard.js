import React, { Component } from 'react';
import Post from './Post';
import Logo from './Header/Logo';
import User from './Header/User';

class SocialCard extends Component {
  state = {
    posts: [
      {
        user: 'happy1234',
        logo: 'fas fa-stroopwafel fa-lg',
        timestamp: '',
        headline: "A Week In Washington, D.C., On A $45,000 Salary",
        image: 'https://s2.r29static.com//bin/entry/758/720x270,80/1998551/image.jpg',
        summary: "Welcome to Money Diaries, where we're tackling what might be the last taboo facing modern working women: money. We're asking millennials how they spend their...",
        url: 'https://www.refinery29.com/money-diary-washington-dc-assistant-to-vp-salary'
        },{
        user: 'alexjdr56',
        logo: 'fa fa-globe fa-lg',
        timestamp: '',
        headline: 'THE WORLD\'S BEST ONCE-IN-A-LIFETIME JOURNEYS, AS CHOSEN BY TRAVEL EXPERTS',
        image: 'https://c-8oqtgrjgwu46x24ux2epgyuyggmx2eeqo.g00.newsweek.com/g00/3_c-8yyy.pgyuyggm.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fu.pgyuyggm.eqox2fukvgux2fyyy.pgyuyggm.eqox2fhkngux2fuvangux2fgodgf-nix2frwdnkex2f4230x2f29x2f30x2fkocig-22.lrix3fk32e.octmx3dkocig_$/$/$/$/$/$/$/$/$/$/$',
        summary: 'If you could plan a trip to anywhere in the world, money no object, where would you go? Here are some fantasy vacation suggestions.',
        url: 'https://www.newsweek.com/worlds-best-once-lifetime-journeys-chosen-top-travel-professionals-1030149'
      },{
        user: 'therup67',
        logo: 'fas fa-podcast fa-lg',
        timestamp: '',
        headline: 'How innovation helped save Detroit',
        image: 'https://i2.cdn.turner.com/money/dam/assets/180706130411-tech-town-780x439.jpg',
        summary: 'Entrepreneurship is in Detroit\'s DNA. It\'s what turned it into one of America\'s most iconic cities, known the world over as the heart...',
        url: 'https://money.cnn.com/2018/07/14/news/economy/detroit-entrepreneurship/index.html'
      },{
        user: 'dancerNLH',
        logo: 'fa fa-cutlery fa-lg',
        timestamp: '',
        headline: 'LA’s Next Interactive “Museum” Lets Fitness Fanatics Pretend They Eat Junk Food',
        image: 'https://cdn.vox-cdn.com/thumbor/WtqZmZ1MTY8n1wZwafqBQRWW2Hc=/0x0:1080x852/920x613/filters:focal(629x271:801x443):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60412203/cheatday.0.jpg',
        summary: 'In an attempt to jump into LA’s burgeoning interactive food “museum” phenomenon, the group behind Cheat Day Land created an experience for so-called healthy eaters to take a day off',
        url: 'https://la.eater.com/2018/7/18/17587382/food-museum-interactive-pop-up-cheat-day-land-los-angeles'
      }
    ]
  };


  render() {
    const postCards = this.state.posts.map((post, index) => 
        <Post 
          key={index}
          user={post['user']}
          logo={post['logo']}
          timestamp={post['timestamp']}
          headline={post['headline']}
          image={post['image']}
          summary={post['summary']}
          url={post['url']}
        />
    );

    return (
      <div className="socialCard">
        <div className="socialCard-header">
          <h1 className="socialCard-title">What's been going on!</h1>
        </div>
        {postCards}
      </div>
    );
  }
}

export default SocialCard;
