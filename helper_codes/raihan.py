import hashlib

def proof_of_work(previous_hash, transactions, target_prefix):
    nonce = 0
    hash_result = ""

    while not hash_result.startswith(target_prefix):
        data = f'{previous_hash}{transactions}{nonce}'
        hash_result = hashlib.sha256(data.encode()).hexdigest()
        nonce += 1

    return nonce, hash_result

# Example Anti-Sybil Measures
def validate_proof_of_work(previous_hash, transactions, target_prefix, nonce):
    data = f'{previous_hash}{transactions}{nonce}'
    hash_result = hashlib.sha256(data.encode()).hexdigest()

    return hash_result.startswith(target_prefix)
