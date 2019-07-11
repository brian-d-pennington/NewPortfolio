import React from 'react';
import Modal from 'react-responsive-modal';

export class Blog extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="ui button" id="blog"
            style={{backgroundColor: '#ffffff'}}
            onClick={this.onOpenModal}>BLOG</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="ui segment" style={{marginTop: '35px', fontFamily: 'sans-serif'}}>
            <p style={{borderBottom: 'solid #ff6700 1px', paddingBottom: '10px'}}><b>May 2019:</b> Well.. several technical interviews, applications, and networking events later: I'm still at it. Frustrating, but I'm just trying to stay positive and reminding myself I'm hardly the only one who goes through this. In the meantime, I'm just pushing forward and learning more advanced React concepts like Redux (so many steps..), Hooks, and Router. I figured if this is gonna be an expensive hobby for awhile I might as well work on projects I enjoy. I went to a React meetup last night that was cool: parts of it were a little advanced but at least it didn't seem completely foreign like the Docker meetup. I will continue to look out for anything in the Milwaukee area related to JS or single page apps. If I have a "calling" in any of this, that seems to be where it lies.</p>          
            <p style={{borderBottom: 'solid #ff6700 1px', paddingBottom: '10px'}}><b>April 2019:</b> The interview process started after my March update and hasn't let up yet! Very intimidating, but with each one I become a bit more comfortable with the process. Work on SmartThermo is happening during spare time, but with every team member in the same applying/interviewing/networking boat it can be hard to get everyone in the same room to work on it. On the networking note: I finally got myself out to a meetup focusing on Docker. It was a bit over my head, but meetups are an important part of this field and I'm glad I overcame that 'shyness.'</p>          
            <p style={{borderBottom: 'solid #ff6700 1px', paddingBottom: '10px'}}><b>March 2019:</b> We’re in a transitional phase with the SmartThermo project (collaboration with Scanalytics Inc.) at devCode right now. I hear we will get to recruit some new graduates to be on the project this week so hopefully that will reinvigorate it. Even more interesting is hearing words like ‘team lead’ thrown around, gulp. Seniority by showing up, I suppose! Anyway, with the main pieces of the project at a standstill, I’ve taken the opportunity to refactor the API libraries that a former team member built and it’s been a challenge to put it mildly. It’s hard enough communicating with the Core back end through React fetch calls (my morning challenge from a few days ago, so many console.logs..) but the Nest API is probably the most difficult API I’ve encountered yet. Thank you to the patient instructors at dCC for helping me step through this beast.</p>          
            <p style={{borderBottom: 'solid #ff6700 1px', paddingBottom: '10px'}}><b>February 2019:</b> The Scanalytics project is off to a slow start due to extreme winter conditions and scheduling conflicts, but anyhoo. The project itself is pretty interesting and – humble brag – our lead at Scanalytics approved my idea: to integrate their IoT foot traffic tracking devices into an HVAC system to monitor room activity. This will integrate a Nest Learning Thermostat and API (actually a simulator which is better for proving our concept) along with the Scanalytics data we pull from the mats in Ward 4 (of course we get interesting looks when we go stomp around over there). Some of the main features will be an Empty Room Mode which will conserve energy if a room as been empty for a period of time, as well as a Packed Room Mode that will dial back the heat in a full room (using body heat to conserve energy: you can tell went to too many punk rock shows..). I got straight to work building the React Component tree and by the middle of the month had built a decent interface. Now onto the hard part of rendering live and updated data into the view..</p>
            <p style={{borderBottom: 'solid #ff6700 1px', paddingBottom: '10px'}}><b>January 2019:</b> Phew.. crazy month. I wrote the bulk of the logic to the MultiBoard app (after learning React over Christmas break), presented it to the class, presented it to three companies just days later (eep), and took my final exams and exit interviews. And that was just in the first 10 days or so. Anyway, I passed everything and did alright on the presentations, but there is still much to learn and improvement to be made. That’s the nature of coding bootcamps: you learn a ton in a short amount of time, but it’s really just the beginning. A few days after graduating, I was approached to work on a team project using Scanalytics (a company located in the same building, featuring some former dCC grads) API data. Basically, a way to keep learning and a good resume booster. We spent the latter half of the month just playing with the cool foot traffic mats and coming up with interesting new ways of using that information. </p>
            <p><b>December 2018:</b> Things Got Real after Thanksgiving: no more console apps to practice on, it was time to build useful, presentable web applications. Dove into my first MVC project (Trash Collector: a portal for both customers and workers to customize their scheduling needs) and then a group integration project called DayOut (a randomized day activity planner based off your location and interests/preferences). My role with DayOut primarily dealt with user interface and front-end details, which I took as a sign as far as the direction I wanted to go in for the final Capstone project. I feel like I could have cranked out a passable idea with ASP.Net MVC 5, but I was drawn to the single page apps that we’ve all gotten accustomed to. With the 10 days off approaching, I decided to crash on React and use it to built my first individual app idea: a bulletin board-like multimedia collaboration tool. And off I went..</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Blog;