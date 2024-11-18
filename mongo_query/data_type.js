const String = {
  $eq: 'Equal',
  $ne: 'Not equal',
  $in: 'In array',
  $nin: 'Not in array',
  $regex: 'Regular expression (contains, starts with, ends with)',
  $text: 'Text search (requires text index)'
};

const Number = {
  $eq: 'Equal',
  $ne: 'Not equal',
  $gt: 'Greater than',
  $gte: 'Greater than or equal to',
  $lt: 'Less than',
  $lte: 'Less than or equal to',
  $in: 'In array',
  $nin: 'Not in array'
};

const Boolean = {
  $eq: 'Equal',
  $ne: 'Not equal',
  $in: 'In array',
  $nin: 'Not in array'
};

const Array = {
  $all: 'Match all elements in the array',
  $elemMatch: 'Match elements in an array that satisfy multiple conditions',
  $size: 'Match arrays with a specified number of elements',
  $in: 'Any of the values in the array',
  $nin: 'None of the values in the array'
};

const Object = {
  $eq: 'Equal (for entire object comparison)',
  $ne: 'Not equal (for entire object comparison)',
  $in: 'In array (for entire object comparison)',
  $nin: 'Not in array (for entire object comparison)',
  $exists: 'Field exists or not',
  $type: 'Type of the field'
};

const Null = {
  $eq: 'Equal to null',
  $ne: 'Not equal to null',
  $exists: 'Field exists or not'
};

const Date = {
  $eq: 'Equal',
  $ne: 'Not equal',
  $gt: 'Greater than',
  $gte: 'Greater than or equal to',
  $lt: 'Less than',
  $lte: 'Less than or equal to',
  $in: 'In array',
  $nin: 'Not in array'
};

const RegExp = {
  $regex: 'Regular expression matching',
  $options: 'Options for regular expression (e.g., i for case insensitive)'
};

const Mixed = {
  $type: 'Match specific BSON type (e.g., 1 for double, 2 for string, etc.)'
};
