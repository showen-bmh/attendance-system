package com.attendance.wiremock;

import com.github.tomakehurst.wiremock.client.WireMock;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;

import static com.github.tomakehurst.wiremock.client.WireMock.aResponse;
import static com.github.tomakehurst.wiremock.client.WireMock.urlPathEqualTo;

public class MockServer {

    public static void main(String[] args) throws IOException {
        WireMock.configureFor(9999);
        WireMock.removeAllMappings();

        mock("/order/1", "01");

    }

    private static void mock(String url, String file) throws IOException {
        ClassPathResource resource = new ClassPathResource("mock-response/01.txt" + file + ".txt");
        String content = StringUtils.join(FileUtils.readLines(resource.getFile(), "UTF-8"), "\n");

        WireMock.stubFor(WireMock.get(urlPathEqualTo(url)).willReturn(aResponse().withBody(content).withStatus(200)));
    }
}