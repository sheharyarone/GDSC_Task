import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://www.yelp.com/biz/lolinda-san-francisco';
const Token = 'PDwkkLWro7REKkoxUxWrQpm7dFxrTb28G3ZAgXRTm99BZRHWTAxTuIK_T6gy8ImOE0_OsiAYC1n8Tlzi7FHtWRXSyPNBvQh4-bJyDMAg7JPHLbavN6Hza0ie2OlTY3Yx';
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
                this.setState({
                    data:res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        
        return (
            <div>
                <h1>DATA</h1>
            </div>
        )
    }
}
export default Data;