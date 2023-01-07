package tech.paulolemos.angularbank.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import tech.paulolemos.angularbank.model.Client;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface ClientRepo extends JpaRepository<Client, Long> {

    void deleteClientById(Long id);

    Optional<Client> findClientById(Long id);
}
