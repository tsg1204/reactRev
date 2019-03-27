import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
      <ApprovalCard>Testing!!!
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          pic={faker.image.avatar()} 
          comment="Comment one" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 7PM" 
          pic={faker.image.avatar()} 
          comment="Comment two" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Tomorrow at 2:00PM" 
          pic={faker.image.avatar()} 
          comment="Comment three" />
      </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));