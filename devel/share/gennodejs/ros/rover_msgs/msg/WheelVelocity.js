// Auto-generated. Do not edit!

// (in-package rover_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class WheelVelocity {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.left_front_vel = null;
      this.right_front_vel = null;
      this.left_back_vel = null;
      this.right_back_vel = null;
      this.rot = null;
      this.rots = null;
    }
    else {
      if (initObj.hasOwnProperty('left_front_vel')) {
        this.left_front_vel = initObj.left_front_vel
      }
      else {
        this.left_front_vel = 0.0;
      }
      if (initObj.hasOwnProperty('right_front_vel')) {
        this.right_front_vel = initObj.right_front_vel
      }
      else {
        this.right_front_vel = 0.0;
      }
      if (initObj.hasOwnProperty('left_back_vel')) {
        this.left_back_vel = initObj.left_back_vel
      }
      else {
        this.left_back_vel = 0.0;
      }
      if (initObj.hasOwnProperty('right_back_vel')) {
        this.right_back_vel = initObj.right_back_vel
      }
      else {
        this.right_back_vel = 0.0;
      }
      if (initObj.hasOwnProperty('rot')) {
        this.rot = initObj.rot
      }
      else {
        this.rot = 0;
      }
      if (initObj.hasOwnProperty('rots')) {
        this.rots = initObj.rots
      }
      else {
        this.rots = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type WheelVelocity
    // Serialize message field [left_front_vel]
    bufferOffset = _serializer.float64(obj.left_front_vel, buffer, bufferOffset);
    // Serialize message field [right_front_vel]
    bufferOffset = _serializer.float64(obj.right_front_vel, buffer, bufferOffset);
    // Serialize message field [left_back_vel]
    bufferOffset = _serializer.float64(obj.left_back_vel, buffer, bufferOffset);
    // Serialize message field [right_back_vel]
    bufferOffset = _serializer.float64(obj.right_back_vel, buffer, bufferOffset);
    // Serialize message field [rot]
    bufferOffset = _serializer.int16(obj.rot, buffer, bufferOffset);
    // Serialize message field [rots]
    bufferOffset = _serializer.int16(obj.rots, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type WheelVelocity
    let len;
    let data = new WheelVelocity(null);
    // Deserialize message field [left_front_vel]
    data.left_front_vel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_front_vel]
    data.right_front_vel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [left_back_vel]
    data.left_back_vel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [right_back_vel]
    data.right_back_vel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [rot]
    data.rot = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [rots]
    data.rots = _deserializer.int16(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 36;
  }

  static datatype() {
    // Returns string type for a message object
    return 'rover_msgs/WheelVelocity';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1a7e790a86a891aac209cbcfa527fcf8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    float64 left_front_vel
    float64 right_front_vel
    float64 left_back_vel
    float64 right_back_vel
    int16 rot
    int16 rots
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new WheelVelocity(null);
    if (msg.left_front_vel !== undefined) {
      resolved.left_front_vel = msg.left_front_vel;
    }
    else {
      resolved.left_front_vel = 0.0
    }

    if (msg.right_front_vel !== undefined) {
      resolved.right_front_vel = msg.right_front_vel;
    }
    else {
      resolved.right_front_vel = 0.0
    }

    if (msg.left_back_vel !== undefined) {
      resolved.left_back_vel = msg.left_back_vel;
    }
    else {
      resolved.left_back_vel = 0.0
    }

    if (msg.right_back_vel !== undefined) {
      resolved.right_back_vel = msg.right_back_vel;
    }
    else {
      resolved.right_back_vel = 0.0
    }

    if (msg.rot !== undefined) {
      resolved.rot = msg.rot;
    }
    else {
      resolved.rot = 0
    }

    if (msg.rots !== undefined) {
      resolved.rots = msg.rots;
    }
    else {
      resolved.rots = 0
    }

    return resolved;
    }
};

module.exports = WheelVelocity;
