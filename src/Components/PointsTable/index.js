import React, { Component } from 'react';
import './index.css';
import * as firebase from 'firebase';

export default class PointsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            logos: [],
            Pictures: ''
        }
    }

    componentDidMount() {
        const result = firebase.database().ref().child('pointstable').limitToLast(1);
        let that = this;

        result.on('value', function (snapshot) {
            snapshot.forEach(function (userSnapshot) {
                console.log("results: " + JSON.stringify(userSnapshot))
                that.setState({
                    Pictures: userSnapshot.val().photoUrl
                })
            });
        });
    }

    render() {

        return (
            <div className="MOM">
                <h1>MOM</h1>
                <div className="sub_teams">
                    <img src={this.state.Pictures} width={600} height={610} />
                </div>
            </div>
        );
    }
}

