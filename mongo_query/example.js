db.collection.find({
    // String Operations
    name: {
        $eq: 'John', // Equal
        $ne: 'Jane', // Not equal
        $in: ['John', 'Doe'], // In array
        $nin: ['Jane', 'Smith'], // Not in array
        $regex: '^Jo', // Regular expression (starts with 'Jo')
        $regex: 'Doe$', // Regular expression (Ends with 'Doe')
        $regex: '^Jo.*Doe$', //(starts with 'Jo' and(.*) Ends with 'Doe')
        $text: { $search: 'John' } // Text search (requires text index)
    },

    // Number Operations
    age: {
        $eq: 30, // Equal
        $ne: 25, // Not equal
        $gt: 20, // Greater than
        $gte: 18, // Greater than or equal to
        $lt: 40, // Less than
        $lte: 35, // Less than or equal to
        $in: [30, 35, 40], // In array
        $nin: [25, 45, 50] // Not in array
    },

    // Boolean Operations
    isActive: {
        $eq: true, // Equal
        $ne: false, // Not equal
        $in: [true, false], // In array
        $nin: [null] // Not in array
    },

    // Array Operations
    tags: {
        $all: ['mongodb', 'database'], // Match all elements in the array
        $elemMatch: { rating: { $gte: 4 } }, // Match elements in an array that satisfy multiple conditions
        $size: 3, // Match arrays with a specified number of elements
        $in: ['mongodb', 'database', 'NoSQL'], // Any of the values in the array
        $nin: ['SQL', 'RDBMS'] // None of the values in the array
    },

    // Object Operations
    address: {
        $eq: { city: 'New York', zip: '10001' }, // Equal (for entire object comparison)
        $ne: { city: 'Los Angeles', zip: '90001' }, // Not equal (for entire object comparison)
        $in: [{ city: 'New York' }, { city: 'Chicago' }], // In array (for entire object comparison)
        $nin: [{ city: 'Los Angeles' }, { city: 'Houston' }], // Not in array (for entire object comparison)
        $exists: true, // Field exists or not
        $type: 'object' // Type of the field
    },

    // Null Operations
    middleName: {
        $eq: null, // Equal to null
        $ne: null, // Not equal to null
        $exists: false // Field exists or not
    },

    // Date Operations
    birthDate: {
        $eq: new Date('1990-01-01'), // Equal
        $ne: new Date('1985-01-01'), // Not equal
        $gt: new Date('1980-01-01'), // Greater than
        $gte: new Date('1980-01-01'), // Greater than or equal to
        $lt: new Date('2000-01-01'), // Less than
        $lte: new Date('1995-01-01'), // Less than or equal to
        $in: [new Date('1990-01-01'), new Date('1995-01-01')], // In array
        $nin: [new Date('1980-01-01'), new Date('1985-01-01')] // Not in array
    },

    // Regular Expression (RegExp) Operations
    email: {
        $regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regular expression matching
        $options: 'i' // Options for regular expression (case insensitive)
    },

    // Mixed Operations
    randomField: {
        $type: 'string' // Match specific BSON type (e.g., 1 for double, 2 for string, etc.)
    }
});



db.collection.find({
    $and: [
        {
            // String Operations
            name: {
                $eq: 'John', // Equal
                $regex: '^Jo', // Regular expression (starts with 'Jo')
            }
        },
        {
            $or: [
                {
                    // Number Operations
                    age: {
                        $gt: 20, // Greater than
                        $lte: 30 // Less than or equal to
                    }
                },
                {
                    // Number Operations
                    age: {
                        $in: [35, 40, 45] // In array
                    }
                }
            ]
        },
        {
            // Boolean Operations
            isActive: {
                $eq: true // Equal
            }
        },
        {
            // Array Operations
            tags: {
                $all: ['mongodb', 'database'], // Match all elements in the array
                $size: 3 // Match arrays with a specified number of elements
            }
        },
        {
            // Object Operations
            address: {
                $exists: true, // Field exists or not
                city: {
                    $in: ['New York', 'Chicago'] // In array
                }
            }
        },
        {
            // Null Operations
            middleName: {
                $exists: false // Field exists or not
            }
        },
        {
            // Date Operations
            birthDate: {
                $gte: new Date('1980-01-01'), // Greater than or equal to
                $lt: new Date('2000-01-01') // Less than
            }
        },
        {
            // Regular Expression (RegExp) Operations
            email: {
                $regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Regular expression matching
                $options: 'i' // Options for regular expression (case insensitive)
            }
        },
        {
            // Mixed Operations
            randomField: {
                $type: 'string' // Match specific BSON type (e.g., 2 for string)
            }
        }
    ]
});
