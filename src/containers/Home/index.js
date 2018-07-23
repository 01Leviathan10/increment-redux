import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Count</p>
        <button>Incremment</button>
        <button>IncremmentAsyc</button>
        <button>Decrement</button>
        <button>DecrementAsyc</button>
        <button onClick={()=> props.changePage()}>Go to about page via redux</button>
    </div>
)

