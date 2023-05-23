/*
Create a function named neuron, that enables your AI/bot to learn to mutate data into a more usable shape. 
You can see how it works from the example.
*/

function neuron(ReRes) {
    return ReRes.reduce((acc, ReRe) => {
        const [request, responseText] = ReRe.split(' - Response: '); // now: req='Orders: shutdown!', res='Yes Sr!'
        let [requestType, requestText] = request.split(': '); // now: reqType='Orders', reqText='shutdown!'
        requestType = requestType.toLowerCase();
        const requestTextKey = requestText.toLowerCase().match(/[a-z ]+/g).join('').split(' ').join('_');
        const objectOfRequestType = acc[requestType] ?? {};
        const objectOfRequest = objectOfRequestType[requestTextKey] ?? {};
        // save request-responce textes
        if (objectOfRequest.responses === undefined) {
            objectOfRequest[requestType.slice(0,-1)] = requestText;
            objectOfRequest.responses = [responseText];
        }else{
            objectOfRequest.responses.push(responseText);
        }
        // save the objec of The Request
        objectOfRequestType[requestTextKey]=objectOfRequest;
        return {...acc, [requestType]: objectOfRequestType};

    }
    ,{});
}

// Example

console.log(neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
]))

console.log(neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
]).questions.what_is_mud_dauber.responses)
/** output
{
  questions: {
    what_is_ounces: { question: 'what is ounces?', responses: [
        'Ounce, unit of weight in the avoirdupois system',
        'equal to 1/16 pound (437 1/2 grains)'
    ] },
    what_is_mud_dauber: { question: 'what is Mud dauber', responses: [
        'Mud dauber is a name commonly applied to a number of wasps'
    ] }
  },
  orders: {
    shutdown: { order: 'shutdown!', responses: ['Yes Sr!'] },
    quote_something: { order: 'Quote something!', responses: [
        'Pursue what catches your heart, not what catches your eyes.'
    ] }
  }
}
*/