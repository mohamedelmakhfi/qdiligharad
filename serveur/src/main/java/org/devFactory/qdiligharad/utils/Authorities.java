package org.devFactory.qdiligharad.utils;

import lombok.RequiredArgsConstructor;
import org.devFactory.qdiligharad.domain.Example;
import org.devFactory.qdiligharad.exception.ExceptionConstants;
import org.devFactory.qdiligharad.exception.GeneralException;
import org.devFactory.qdiligharad.repository.ExampleRepository;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Authorities {

    private final ExampleRepository documentRepository;



    public void hasAuthorityToEditDocumentInformation(Long id) {
        this.hasGlobalAuthorityToDocumentInformation(id);

        //TODO: Implement logique to throw error of edit in a document=
    }

    private void hasAuthorityToReadDocumentInformation(Long id) {
        this.hasGlobalAuthorityToDocumentInformation(id);
        //TODO: Implement logique to thrw error of read in a document
    }

    private void hasGlobalAuthorityToDocumentInformation(Long id) {
        Example information = documentRepository.findById(id).orElseThrow(() -> new GeneralException(ExceptionConstants.getErrorMessageProvider("NOT_FOUND").errorMessage("document")));
    }
}
