const ACTIONS = {
    JOIN: 'join',
    LEAVE: 'leave',
    SHARE_ROOMS: 'share-rooms',
    ADD_PEER: 'add-peer', // новое соединение можду комнатами
    REMOVE_PEER: 'remove-peer', 
    RELAY_SDP: 'relay-sdp', // передача стримов с медиа данными
    RELAY_ICE: 'relay-ice', // передача физического подключения
    ICE_CANDIDATE: 'ice-candidate', 
    SESSION_DESCRIPTION: 'session-description', // новая сесия

    SEND_MESSAGE: 'send-message'
  };
  
  module.exports = ACTIONS;