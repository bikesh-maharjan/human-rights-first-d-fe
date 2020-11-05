import React from 'react';

import { Radio, Button } from 'antd';
import { DatePicker, Space, Input } from 'antd';
import './globalstyle.css';

const options = [
  { label: 'Map', value: 'Map' },
  { label: 'Pie Chart ', value: 'Pie Chart' },
  { label: 'Other Chart', value: 'Other Chart' },
];
const incidents = ['Most Incident', 'Least Incident'];
const { RangePicker } = DatePicker;

class FilterSearch extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="main">
        <div className="main-heading">
          <h1>Police Shooting Between 2013 and 2020</h1>
        </div>
        <div className="search-result">
          <h2>Filter Your Results</h2>
        </div>
        <div className="visual-style">
          <h3>Select Visual Style</h3>
        </div>
        <div className="radio-buttons">
          <div className="map-style">
            <Radio.Group
              size="large"
              options={options}
              onChange={this.onChange}
              value={value}
              optionType="button"
              buttonStyle="solid"
            />
          </div>

          <div className="incidents">
            <Radio.Group
              size="large"
              options={incidents}
              onChange={this.onChange}
              value={value}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>
        <div className="dates">
          <div>
            <Space direction="horizontal" size={12}>
              <RangePicker size="large" />

              <RangePicker size="large" picker="year" />
            </Space>
          </div>
        </div>

        <div className="input-form">
          <Input size="large" placeholder=" Select State" />
          <Input placeholder="City" />
          <Input placeholder="Zipcode" />
        </div>
        <Button type="primary" shape="round" size="large">
          Add More
        </Button>

        <div style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
          <Button
            style={{ margin: '2px' }}
            type="primary"
            shape="round"
            size="large"
          >
            Submit
          </Button>
          <Button type="primary" shape="round" size="large">
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }
}

export default FilterSearch;