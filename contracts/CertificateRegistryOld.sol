// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {

    address public admin; 

    struct Certificate {
        string certificateHash;         // Hash of the file content
        string fileUrl;                 // Public URL of the file
        address owner;                  // Owner of the certificate
        address assigner;               // Address of the person who assigned the certificate
        uint64 timestamp;               // Timestamp of certificate creation, reduced size to save gas
        string status;                  // Status of the certificate
    }

    // Mapping to store certificates by unique certificate ID
    mapping(string => Certificate) private certificates;

    // Event to log the addition of a new certificate, including the file URL
    event CertificateAdded(
        string indexed certId,
        address indexed owner,
        address indexed assigner,
        string certificateHash,
        string fileUrl,
        uint256 timestamp,
        string status
    );

    // Event to log status updates
    event StatusUpdated(
        string indexed certId,
        string newStatus
    );

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyAssignerOrOwner(string memory certId) {
        require(
            msg.sender == certificates[certId].assigner || msg.sender == certificates[certId].owner,
            "Only the assigner or the owner can update the status"
        );
        _;
    }

    constructor() {
        admin = msg.sender; // Set the contract deployer as the admin
    }

    // Function to add a new certificate record; only admin can add certificates
    function addCertificate(
        string memory _certId,
        string memory _certificateHash,
        string memory _fileUrl,
        address _assigner,
        string memory _status
    ) public onlyAdmin {
        require(certificates[_certId].timestamp == 0, "Certificate ID already exists.");

        certificates[_certId] = Certificate({
            certificateHash: _certificateHash,
            fileUrl: _fileUrl,
            owner: msg.sender,
            assigner: _assigner,
            timestamp: uint64(block.timestamp),
            status: _status
        });

        emit CertificateAdded(_certId, certificates[_certId].owner, _assigner, _certificateHash, _fileUrl, block.timestamp, _status);
    }

    // Public function to retrieve certificate details by certId
    function getCertificate(string memory _certId) public view returns (
        string memory certificateHash,
        string memory fileUrl,
        address owner,
        address assigner,
        uint256 timestamp,
        string memory status
    ) {
        require(certificates[_certId].timestamp != 0, "Certificate not found.");

        Certificate memory cert = certificates[_certId];
        return (
            cert.certificateHash,
            cert.fileUrl,
            cert.owner,
            cert.assigner,
            cert.timestamp,
            cert.status
        );
    }

    // Function to update the status of a certificate, restricted to the assigner or owner
    function updateStatus(string memory _certId, string memory _newStatus) public onlyAssignerOrOwner(_certId) {
        require(certificates[_certId].timestamp != 0, "Certificate not found.");

        certificates[_certId].status = _newStatus;
        emit StatusUpdated(_certId, _newStatus);
    }

    // Function to change admin if necessary, restricted to the current admin
    function changeAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "New admin address cannot be zero");
        admin = newAdmin;
    }
}
