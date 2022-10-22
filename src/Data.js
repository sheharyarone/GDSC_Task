import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://www.yelp.com/biz/lolinda-san-francisco';
const Token = 'pSOSDd1kvAwg-Y85LGt3PLjG3V1Zq03hEwk3pmEQ1tQbS0YsG_2DsNLC-BXFW-EHKUAiaz4QikfbN1okYl1vlIIJ8iFQqYOsjbl5TBPA_uQIxSqyUohMlV9ByM5TY3Yx';
const locationSearched = 'NEW YORK';
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

    }
    async componentDidMount() {


        let response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
            headers: {
                Authorization: `Bearer ${Token}`,
                Accept: 'application/json'
            },
            params: {
                categories: 'breakfast_brunch',
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(response, 0);
        this.setState({
            data: { response }
        })
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.response}</h1> */}
            </div>
        )
    }
}
export default Data;