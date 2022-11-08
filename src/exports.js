import {Meteor} from 'meteor/meteor';

let SearchSource;

if (Meteor.isServer) {
    import('./server').then(lib => SearchSource = lib.SearchSource);
} else {
    import('./client').then(lib => SearchSource = lib.SearchSource);
}

export {SearchSource};
