import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { WithContext as ReactTags } from 'react-tag-input';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './reactTags.css';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];
 
class Tags extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            tags: [
                { id: "Tools", text: "Tools" },
                { id: "Produce", text: "Produce" },
                { id: "Seeds", text: "Seeds" },
                { id: "Recipe", text: "Recipe" }
             ],
            suggestions: [
                { id: 'Fruits', text: 'Fruits' },
                { id: 'Vegetables', text: 'Vegetables' },
                { id: 'Spanish', text: 'Spanish' },
                { id: 'Lents', text: 'Lents' },
                { id: 'Milwaukie', text: 'Milwaukie' },
                { id: 'Cully', text: 'Cully' }
             ]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }
 
    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        this.setState(state => ({ tags: [...state.tags, tag] }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
    }
 
    render() {
        const { tags, suggestions } = this.state;
        return (
            <div>
                <ReactTags tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    handleDrag={this.handleDrag}
                    delimiters={delimiters} />
            </div>
        )
    }
};
 

// ReactDOM.render(<Tags />, document.getElementById('app'));
export default Tags;