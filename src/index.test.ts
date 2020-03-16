import { DFSEO } from ".";
import * as dotenv from "dotenv";
import { expect } from "chai";
import { assert } from "console";
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME || "";
const password = process.env.DATAFORSEO_PASSWORD || "";

const newTask = [
  {
    keyword: "test",
    location_code: 2840,
    language_code: "en"
  }
];

const taskId = "03111954-3683-0066-2000-8e12d6d815d8";

async function dfseoAPICheck(response) {
  expect(response.status_code).to.equal(20000);
}

// DFSEO

describe("DFSEO", () => {
  it("should create DFSEO class object", () => {
    const dfseo = new DFSEO(username, password, true);
    assert(dfseo);
    it("should create fetch method", () => {
      assert(dfseo.fetch);
    });

    // DFSEO SERP

    describe("DFSEO SERP", () => {
      it("should create SERP API", () => {
        assert(dfseo.serpAPI);
      });
      it("should create google", () => {
        assert(dfseo.serpAPI.google);

        // DFSEO SERP Google

        describe("DFSEO SERP Google", () => {
          it("should be able to fetch languages", async () => {
            dfseoAPICheck(await dfseo.serpAPI.google.languages());
          });
          it("should be able to fetch locations", async () => {
            dfseoAPICheck(await dfseo.serpAPI.google.locations());
          });
          it("should create news", () => {
            assert(dfseo.serpAPI.google.news);

            // DFSEO SERP Google News

            describe("DFSEO SERP Google News", () => {
              it("should create live", async () => {
                assert(dfseo.serpAPI.google.news.live);

                // DFSEO SERP Google News Live

                describe("DFSEO SERP Google News Live", () => {
                  it("should be able to get live advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.live.advanced(newTask)
                    );
                  });

                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.live.html(newTask)
                    );
                  });
                });
              });
              it("should create task get", () => {
                assert(dfseo.serpAPI.google.news.taskGet);

                // DFSEO SERP Google News Task Get

                describe("DFSEO SERP Google Task Get", () => {
                  it("should be able to get task get regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.taskGet.advanced(taskId)
                    );
                  });

                  it("should be able to get task get html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.news.taskGet.html(taskId)
                    );
                  });
                });
              });
              it("should be able to make a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.news.taskPost(newTask)
                );
              });

              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.news.tasksReady());
              });
            });
          });
          it("should create organic", () => {
            assert(dfseo.serpAPI.google.organic);

            // DFSEO SERP Google Organic
            describe("DFSEO SERP Google Organic", () => {
              it("should be able to make a task", async () => {
                dfseoAPICheck(
                  await dfseo.serpAPI.google.organic.taskPost(newTask)
                );
              });
              it("should be able to get ready tasks", async () => {
                dfseoAPICheck(await dfseo.serpAPI.google.organic.taskReady());
              });

              it("should create live", () => {
                assert(dfseo.serpAPI.google.organic.live);

                // DFSEO SERP Google Organic Live

                describe("DFSEO SERP Google Organic Live", () => {
                  it("should be able to get live regular", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.regular(newTask)
                    );
                  });
                  it("should be able to get live advanced", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.advanced(newTask)
                    );
                  });
                  it("should be able to get live html", async () => {
                    dfseoAPICheck(
                      await dfseo.serpAPI.google.organic.live.html(newTask)
                    );
                  });
                });

                it("should create task get", () => {
                  assert(dfseo.serpAPI.google.organic.taskGet);

                  // DFSEO SERP Google Organic Task Get

                  describe("DFSEO SERP Google Organic Task Get", () => {
                    it("should be able to get task get regular", async () => {
                      await dfseo.serpAPI.google.organic.taskGet.regular(
                        taskId
                      );
                    });

                    it("should be able to get task get advanced", async () => {
                      await dfseo.serpAPI.google.organic.taskGet.advanced(
                        taskId
                      );
                    });

                    it("should be able to get task html", async () => {
                      await dfseo.serpAPI.google.organic.taskGet.html(taskId);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
