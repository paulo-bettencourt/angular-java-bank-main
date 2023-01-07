package tech.paulolemos.angularbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paulolemos.angularbank.exception.UserNotFoundException;
import tech.paulolemos.angularbank.model.Client;
import tech.paulolemos.angularbank.repo.ClientRepo;

import javax.transaction.Transactional;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Transactional
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Service
public class ClientService {

    private final ClientRepo clientRepo;

    @Autowired
    public ClientService(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    public Client addClient(Client client) {
        client.setClientCode(UUID.randomUUID().toString());
        return clientRepo.save(client);
    }

    public List<Client> findAllClients() {
        return clientRepo.findAll();
    }

    public Client updateClient(Client client) {
        return clientRepo.save(client);
    }

    public Client findClientById(Long id) {
        return clientRepo.findClientById(id).orElseThrow(()-> new UserNotFoundException("User by id " + id + " was not found"));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void deleteClient(Long id) {
        clientRepo.deleteClientById(id);
    }
}
