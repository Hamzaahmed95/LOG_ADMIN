import React, { Component } from 'react';
import './index.css';
import * as firebase from 'firebase';

export default class MOM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            logos: [],
            Pictures: []
        }
    }

    componentDidMount() {
        const result = firebase.database().ref().child('mom');
        let that = this;

        result.on('value', function (snapshot) {
            snapshot.forEach(function (userSnapshot) {
                console.log("results: " + JSON.stringify(userSnapshot))
                that.setState({
                    Pictures: that.state.Pictures.concat([userSnapshot.val().picture])
                })
            });
        });
    }

    render() {

        return (
            <div className="MOM">
                <h1>MOM</h1>
                {this.state.Pictures.map(picture =>
                    <div className="sub_teams">
                        <img src={picture} width={500} height={310} />
                    </div>
                )}
            </div>
        );
    }
}

