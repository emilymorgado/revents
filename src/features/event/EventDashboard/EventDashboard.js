import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     events: events,
  //     isOpen: false,
  //   }
    // this.handleFormOpen = this.handleFormOpen.bind(this);
  // }

  state = {
    events: events,
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  }

  // This allows passing data and binding to the correct this
  // without binding inside the render
  // binding inside the render is expensive as it creates a new function
  // every time it's called

  // This is still experimental, so using the top level bind is currently
  // best practice

  // handleFormOpen = (thing) => () => {
  //   console.log(thing)
  // }

  // onClick={this.handleFormOpen('a string')}


  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  }

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    const hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    });
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events}/>
        </Grid.Column>

        <Grid.Column width={6}>
          <Button onClick={this.handleFormOpen} positive content='Create Event' />
          {this.state.isOpen &&
            <EventForm
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          }
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
