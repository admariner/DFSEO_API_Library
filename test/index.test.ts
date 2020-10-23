import { DFSEO, IDFSEO_API_Response } from "../lib";
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
		language_code: "en",
	},
];

const onPageTask = {
	target: "google.com",
	max_crawl_pages: 1,
};

const taskId = "03111954-3683-0066-2000-8e12d6d815d8";
const onPageTaskId = "10220041-3683-0216-2000-69901ad4d883";

async function dfseoAPICheck(response: IDFSEO_API_Response) {
	try {
		if (!response) throw "no response object";
		expect(response?.status_code).to.equal(20000);
	} catch (e) {
		assert(false);
	}
}

// DFSEO

describe("DFSEO", () => {
	const dfseo = new DFSEO(username, password, true);
	const paidDFSEO = new DFSEO(username, password); //cover branch
	it("should create DFSEO class object", () => {
		assert(dfseo);
		assert(paidDFSEO);
		describe("should be able to handle errors", () => {
			it("should create fetch method", () => {
				assert(dfseo.fetch);
			});
			it("should http error", async () => {
				try {
					await paidDFSEO.fetch({
						url: "thisendpointdoesnotexist",
						method: "GET",
					});
					assert(false);
				} catch (e) {
					assert(true);
				}
			});
			it("should dfseo error", async () => {
				try {
					await dfseo.serp.google.organic.taskPost(null);
					return false;
				} catch (e) {
					return true;
				}
			});
		});
	});

	// data for seo labs
	it("should create Data For SEO Labs API", () => {
		assert(dfseo.dataForSEOLabs);
		describe("DataForSEO Labs API", () => {
			it("should be able to create competitor research", () => {
				assert(dfseo.dataForSEOLabs.competitorResearch);
				describe("DFSEO DataForSEO Labs API Competitor Research", () => {
					it("should be able to get ranked keywords", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.rankedKeywords(newTask));
					});
					it("should be able to get serp competitors", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.serpCompetitors(newTask));
					});
					it("should be able to get competitors domain", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.competitorsDomain(newTask));
					});
					it("should be able to get domain intersection", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.domainIntersection(newTask));
					});
					it("should be able to get subdomains", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.subdomains(newTask));
					});
					it("should be able to get relevant pages", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.relevantPages(newTask));
					});
					it("should be able to get domain rank overview", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.competitorResearch.domainRankOverview(newTask));
					});
				});
			});
			it("should bea ble to create market specific analysis", () => {
				assert(dfseo.dataForSEOLabs.marketSpecificAnalysis);
				describe("DFSEO DataForSEO Labs API Market Specific Analysis", () => {
					it("should be able to get categories for domain", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.marketSpecificAnalysis.categoriesForDomain(newTask));
					});
					it("should be able to get keywords for categories", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.marketSpecificAnalysis.keywordsForCategories(newTask));
					});
					it("should be able to get ranked domains by category", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.marketSpecificAnalysis.rankedDomainsByCategory(newTask));
					});
				});
			});
			it("should be able to create keyword research", () => {
				assert(dfseo.dataForSEOLabs.keywordResearch);
				describe("DFSEO DataForSEO Labs API Keyword Research", () => {
					it("should be able to get related keywords", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.keywordResearch.relatedKeywords(newTask));
					});
					it("should be able to get keyword suggestsions", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.keywordResearch.keywordSuggestions(newTask));
					});
					it("should be able to get keyword ideas", async () => {
						dfseoAPICheck(await dfseo.dataForSEOLabs.keywordResearch.keywordIdeas(newTask));
					});
				});
			});
			it.skip("should be able to get filters", async () => {
				dfseoAPICheck(await dfseo.dataForSEOLabs.filters());
			});
			it("should be able to get categories", async () => {
				dfseoAPICheck(await dfseo.dataForSEOLabs.categories());
			});
			it("should be able to get locations and languages", async () => {
				dfseoAPICheck(await dfseo.dataForSEOLabs.locationsAndLanguages());
			});
		});
	});
	// appendix
	it("should create appendix API", () => {
		assert(dfseo.appendix);
		describe("DFSEO Appendix API", () => {
			it("should be able to get user data", async () => {
				dfseoAPICheck(await dfseo.appendix.userData());
			});
			it("should be able to get errors", async () => {
				dfseoAPICheck(await dfseo.appendix.errors());
			});
		});
	});
	// traffic analytics
	it("should create traffic analytis API", () => {
		assert(dfseo.trafficAnalytics);
		describe("DFSEO Traffic Analytics API", () => {
			it("should create similar web", () => {
				assert(dfseo.trafficAnalytics.similarWeb);
				describe("DFSEO Traffic Analytics Similar Web", () => {
					it("should be able to set task", async () => {
						dfseoAPICheck(await dfseo.trafficAnalytics.similarWeb.taskPost(newTask));
					});
					it("should be able to get ready tasks", async () => {
						dfseoAPICheck(await dfseo.trafficAnalytics.similarWeb.tasksReady());
					});
					it("should be able to get task", async () => {
						dfseoAPICheck(await dfseo.trafficAnalytics.similarWeb.taskGet(taskId));
					});
					it("should be able to get live data", async () => {
						dfseoAPICheck(await dfseo.trafficAnalytics.similarWeb.live(newTask));
					});
				});
			});
		});
	});
	//DFSEO Keywords
	it("should creat keywords API", () => {
		assert(dfseo.keywordsData);
		describe("DFSEO Keywords Data API", () => {
			it("should create google trends", () => {
				assert(dfseo.keywordsData.googleTrends);
				describe("DFSEO Keywords Google Trends", () => {
					it("should be able to create Explore", () => {
						assert(dfseo.keywordsData.googleTrends.explore);
						describe("DFSEO Keywords Google Trends Explore", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleTrends.explore.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleTrends.explore.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleTrends.explore.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleTrends.explore.live(newTask));
							});
						});
					});
					it("should be able to get locations", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleTrends.locations());
					});
					it("should be able to get locations by country", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleTrends.locations("UK"));
					});
					it("should be able to get languages", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleTrends.languages());
					});
					it("should be able to get  categories", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleTrends.categories());
					});
				});
			});
			it("should create google Ads", () => {
				assert(dfseo.keywordsData.googleAds);
				describe("DFSEO Keywords Google Ads", () => {
					it("should be able to create ads traffic by platform", () => {
						assert(dfseo.keywordsData.googleAds.adsTrafficByPlatform);
						describe("DFSEO Keywords Google Ads Ads Traffic By Platform", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByPlatform.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByPlatform.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByPlatform.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByPlatform.live(newTask));
							});
						});
					});
					it("should be able to create ads traffic by keywords", () => {
						assert(dfseo.keywordsData.googleAds.adsTrafficByKeywords);
						describe("DFSEO Keywords Google Ads Ads Traffic By Keywords", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByKeywords.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByKeywords.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByKeywords.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.adsTrafficByKeywords.live(newTask));
							});
						});
					});
					it("should create keywords for category", () => {
						assert(dfseo.keywordsData.googleAds.keywordsForCategory);
						describe("DFSEO Keywords Google Ads Keywords for Category", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForCategory.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForCategory.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForCategory.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForCategory.live(newTask));
							});
						});
					});
					it("should create keywords for keywords", () => {
						assert(dfseo.keywordsData.googleAds.keywordsForKeywords);
						describe("DFSEO Keywords Google Ads Keywords for Keywords", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForKeywords.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForKeywords.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForKeywords.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForKeywords.live(newTask));
							});
						});
					});
					it("should create keywords for site", () => {
						assert(dfseo.keywordsData.googleAds.keywordsForSite);
						describe("DFSEO Keywords Google Ads Keywords For Site", () => {
							it("should be able to able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForSite.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForSite.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForSite.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.keywordsForSite.live(newTask));
							});
						});
					});
					it("should create search volume", () => {
						assert(dfseo.keywordsData.googleAds.searchVolume);
						describe("DFSEO Keywords Google Ads Search Volume", () => {
							it("should be able to set task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.searchVolume.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.searchVolume.tasksReady());
							});
							it("should be able to get task", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.searchVolume.taskGet(taskId));
							});
							it("should be able to get live data", async () => {
								dfseoAPICheck(await dfseo.keywordsData.googleAds.searchVolume.live(newTask));
							});
						});
					});
					it("should be able to get locations", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleAds.locations());
					});
					it("should be able to get languages", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleAds.languages());
					});
					it("should be able to get categories", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleAds.categories());
					});
					it("should be able to get adwords status", async () => {
						dfseoAPICheck(await dfseo.keywordsData.googleAds.adWordsStatus());
					});
				});
			});
			it("should create google trends", () => {
				assert(dfseo.keywordsData.googleTrends);
			});
		});
	});

	// DFSEO SERP
	it("should create SERP API", () => {
		assert(dfseo.serp);

		describe("DFSEO SERP", () => {
			it("should create yandex", () => {
				assert(dfseo.serp.yandex);
				describe("DFSEO SERP Yandex", () => {
					it("should be able to create organic", () => {
						assert(dfseo.serp.yandex.organic);
						describe("DFSEO SERP Yandex Organic", () => {
							it("should be able to create live", () => {
								assert(dfseo.serp.yandex.organic.live);
								describe("DFSEO SERP Yandex Organic Live", () => {
									it("should be able to get regular", async () => {
										dfseoAPICheck(await dfseo.serp.yandex.organic.live.regular(newTask));
									});
									it("should be able to get html", async () => {
										dfseoAPICheck(await dfseo.serp.yandex.organic.live.html(newTask));
									});
								});
							});
							it("should be able to create task get", () => {
								assert(dfseo.serp.yandex.organic.taskGet);
								describe("DFSEO SERP Yandex Organic Task Get", () => {
									it("should be able to get regular", async () => {
										dfseoAPICheck(await dfseo.serp.yandex.organic.taskGet.regular(taskId));
									});
									it("should be able to get html", async () => {
										dfseoAPICheck(await dfseo.serp.yandex.organic.taskGet.html(taskId));
									});
								});
							});
							it("should be able to create task", async () => {
								dfseoAPICheck(await dfseo.serp.yandex.organic.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.yandex.organic.tasksReady());
							});
						});
					});
					it("should be able to fetch locations", async () => {
						dfseoAPICheck(await dfseo.serp.yandex.locations());
					});
					it("should be able to fetch locations by country code", async () => {
						dfseoAPICheck(await dfseo.serp.yandex.locations("UK"));
					});
					it("should be able to fetch languages", async () => {
						dfseoAPICheck(await dfseo.serp.yandex.languages());
					});
				});
			});
			it("should create yahoo", () => {
				assert(dfseo.serp.yahoo);
				describe("DFSEO SERP Yahoo", () => {
					it("should be able to create organic", () => {
						assert(dfseo.serp.yahoo.organic);
						describe("DFSEO SERP Yahoo Organic", () => {
							it("should be able to create live", () => {
								assert(dfseo.serp.yahoo.organic.live);
								describe("DFSEO SERP Yahoo Organic Live", () => {
									it("should be able to get regular", async () => {
										dfseoAPICheck(await dfseo.serp.yahoo.organic.live.regular(newTask));
									});
									it("should be able to get html", async () => {
										dfseoAPICheck(await dfseo.serp.yahoo.organic.live.html(newTask));
									});
								});
							});
							it("should be able to create task get", () => {
								describe("DFSEO SERP Yahoo Organic Task Get", () => {
									it("should be able to get regular", async () => {
										dfseoAPICheck(await dfseo.serp.yahoo.organic.taskGet.regular(taskId));
									});
									it("should be able to get html", async () => {
										dfseoAPICheck(await dfseo.serp.yahoo.organic.taskGet.html(taskId));
									});
								});
							});
							it("should be able to create task", async () => {
								dfseoAPICheck(await dfseo.serp.yahoo.organic.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.yahoo.organic.tasksReady());
							});
						});
					});
					it("should be able to fetch locations", async () => {
						dfseoAPICheck(await dfseo.serp.yahoo.locations());
					});
					it("should be able to fetch locations by country", async () => {
						dfseoAPICheck(await dfseo.serp.yahoo.locations("UK"));
					});
					it("should be able to fetch languages", async () => {
						dfseoAPICheck(await dfseo.serp.yahoo.languages());
					});
				});
			});
			it("should create bing", () => {
				assert(dfseo.serp.bing);

				describe("DFSEO SERP Bing", () => {
					it("should be able to fetch locations", async () => {
						dfseoAPICheck(await dfseo.serp.bing.locations());
					});
					it("should be able to fetch locations by country", async () => {
						dfseoAPICheck(await dfseo.serp.bing.locations("UK"));
					});
					it("should be able to fetch languages", async () => {
						dfseoAPICheck(await dfseo.serp.bing.languages());
					});
					it("should be able to create local pack", () => {
						assert(dfseo.serp.bing.localPack);
						describe("DFSEO SERP Bing Local Pack", () => {
							it("should be able to create a task", async () => {
								dfseoAPICheck(await dfseo.serp.bing.localPack.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.bing.localPack.tasksReady());
							});
							it("should be able to create task get", () => {
								assert(dfseo.serp.bing.localPack.taskGet);
								describe("DFSEO SERP Bing Local Pack Task Get", () => {
									it("should be able to get regular task", async () => {
										dfseoAPICheck(await dfseo.serp.bing.localPack.taskGet.regular(taskId));
									});
									it("should be able to get html task", async () => {
										dfseoAPICheck(await dfseo.serp.bing.localPack.taskGet.html(taskId));
									});
								});
							});
							it("should be able to create live", () => {
								assert(dfseo.serp.bing.localPack.live);
								describe("DFSEO SERP Bing Local Pack Live", () => {
									it("should be able to get live regular", async () => {
										dfseoAPICheck(await dfseo.serp.bing.localPack.live.regular(newTask));
									});
									it("should be able to get live html", async () => {
										dfseoAPICheck(await dfseo.serp.bing.localPack.live.html(newTask));
									});
								});
							});
						});
					});
					it("should be able to create organic", () => {
						assert(dfseo.serp.bing.organic);
						describe("DFSEO SERP Bing Organic", () => {
							it("should be able to create a task", async () => {
								dfseoAPICheck(await dfseo.serp.bing.organic.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.bing.organic.tasksReady());
							});
							it("should be able to create task get", () => {
								assert(dfseo.serp.bing.organic.taskGet);
								describe("DFSEO SERP Bing Organic Task Get", () => {
									it("should be able to get regular task", async () => {
										dfseoAPICheck(await dfseo.serp.bing.organic.taskGet.regular(taskId));
									});
									it("should be able to get html task", async () => {
										dfseoAPICheck(await dfseo.serp.bing.organic.taskGet.html(taskId));
									});
								});
							});
							it("should be able to create live", () => {
								assert(dfseo.serp.bing.organic.live);
								describe("DFSEO SERP Bing Organic Live", () => {
									it("should be able to get regular live", async () => {
										dfseoAPICheck(await dfseo.serp.bing.organic.live.regular(newTask));
									});

									it("should be able to get html live", async () => {
										dfseoAPICheck(await dfseo.serp.bing.organic.live.html(newTask));
									});
								});
							});
						});
					});
				});
			});
			it("should create google", () => {
				assert(dfseo.serp.google);

				// DFSEO SERP Google

				describe("DFSEO SERP Google", () => {
					it("should be able to fetch languages", async () => {
						dfseoAPICheck(await dfseo.serp.google.languages());
					});
					it("should be able to fetch locations", async () => {
						dfseoAPICheck(await dfseo.serp.google.locations());
					});
					it("should be able to get locations by country", async () => {
						dfseoAPICheck(await dfseo.serp.google.locations("UK"));
					});
					it("should create images", () => {
						assert(dfseo.serp.google.images);

						// DFSEO SERP Google Images

						describe("DFSEO SERP Google Images", () => {
							it("should be able to create a new task", async () => {
								dfseoAPICheck(await dfseo.serp.google.images.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.google.images.tasksReady());
							});

							it("should create live", () => {
								assert(dfseo.serp.google.images.live);
								describe("DFSEO SERP Google Images Live", () => {
									it("should be able to get live advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.images.live.advanced(newTask));
									});
									it("should be able to get live html", async () => {
										dfseoAPICheck(await dfseo.serp.google.images.live.html(newTask));
									});
								});
							});
							it("should create task get", () => {
								assert(dfseo.serp.google.images.taskGet);
								describe("DFSEO SERP Google Images Task Get", () => {
									it("should be able to get task get advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.images.taskGet.advanced(taskId));
									});

									it("should be able to get task get html", async () => {
										dfseoAPICheck(await dfseo.serp.google.images.taskGet.html(taskId));
									});
								});
							});
						});
					});
					it("should create maps", () => {
						assert(dfseo.serp.google.maps);

						// DFSEO SERP Google Maps

						describe("DFSEO SERP Google Maps", () => {
							it("should be able to add a new task", async () => {
								dfseoAPICheck(await dfseo.serp.google.maps.taskPost(newTask));
							});
							it("should be able to get tasks ready", async () => {
								dfseoAPICheck(await dfseo.serp.google.maps.tasksReady());
							});
							it("should create live", () => {
								assert(dfseo.serp.google.maps.live);
								// DFSEO SERP Google Maps Live
								describe("DFSEO SERP Google Maps Live", () => {
									it("should be able to get advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.maps.live.advanced(newTask));
									});
								});
							});
							it("should create task get", () => {
								assert(dfseo.serp.google.maps.taskGet);

								// DFSEO SERP Google Maps Task Get
								describe("DFSEO SERP Google Maps Task Get", () => {
									it("should be able to get advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.maps.taskGet.advanced(taskId));
									});
								});
							});
						});
					});
					it("should create news", () => {
						assert(dfseo.serp.google.news);

						// DFSEO SERP Google News

						describe("DFSEO SERP Google News", () => {
							it("should create live", async () => {
								assert(dfseo.serp.google.news.live);

								// DFSEO SERP Google News Live

								describe("DFSEO SERP Google News Live", () => {
									it("should be able to get live advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.news.live.advanced(newTask));
									});

									it("should be able to get live html", async () => {
										dfseoAPICheck(await dfseo.serp.google.news.live.html(newTask));
									});
								});
							});
							it("should create task get", () => {
								assert(dfseo.serp.google.news.taskGet);

								// DFSEO SERP Google News Task Get

								describe("DFSEO SERP Google Task Get", () => {
									it("should be able to get task get regular", async () => {
										dfseoAPICheck(await dfseo.serp.google.news.taskGet.advanced(taskId));
									});

									it("should be able to get task get html", async () => {
										dfseoAPICheck(await dfseo.serp.google.news.taskGet.html(taskId));
									});
								});
							});
							it("should be able to make a task", async () => {
								dfseoAPICheck(await dfseo.serp.google.news.taskPost(newTask));
							});

							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.google.news.tasksReady());
							});
						});
					});
					it("should create organic", () => {
						assert(dfseo.serp.google.organic);

						// DFSEO SERP Google Organic
						describe("DFSEO SERP Google Organic", () => {
							it("should be able to make a task", async () => {
								dfseoAPICheck(await dfseo.serp.google.organic.taskPost(newTask));
							});
							it("should be able to get ready tasks", async () => {
								dfseoAPICheck(await dfseo.serp.google.organic.taskReady());
							});

							it("should create live", () => {
								assert(dfseo.serp.google.organic.live);

								// DFSEO SERP Google Organic Live

								describe("DFSEO SERP Google Organic Live", () => {
									it("should be able to get live regular", async () => {
										dfseoAPICheck(await dfseo.serp.google.organic.live.regular(newTask));
									});
									it("should be able to get live advanced", async () => {
										dfseoAPICheck(await dfseo.serp.google.organic.live.advanced(newTask));
									});
									it("should be able to get live html", async () => {
										dfseoAPICheck(await dfseo.serp.google.organic.live.html(newTask));
									});
								});
							});
							it("should create task get", () => {
								assert(dfseo.serp.google.organic.taskGet);

								// DFSEO SERP Google Organic Task Get

								describe("DFSEO SERP Google Organic Task Get", () => {
									it("should be able to get task get regular", async () => {
										await dfseo.serp.google.organic.taskGet.regular(taskId);
									});

									it("should be able to get task get advanced", async () => {
										await dfseo.serp.google.organic.taskGet.advanced(taskId);
									});

									it("should be able to get task html", async () => {
										await dfseo.serp.google.organic.taskGet.html(taskId);
									});
								});
							});
						});
					});
				});
			});
		});
	});

	// DFSEO On Page
	it("should create on page", () => {
		assert(dfseo.onPage);

		describe("DFSEO On Page", () => {
			it("should be able to make a task", async () => dfseoAPICheck(await dfseo.onPage.taskPost([onPageTask])));
			it("should be able to get page summary", async () => dfseoAPICheck(await dfseo.onPage.summary(onPageTaskId)));
			it("should be able to get Pages", async () => dfseoAPICheck(await dfseo.onPage.pages([{ id: onPageTaskId }])));
			it("should be able to get pages by resource", async () => dfseoAPICheck(await dfseo.onPage.pagesByResource([{ id: onPageTaskId, url: "google.com" }])));
			it("should be able to get resources", async () => dfseoAPICheck(await dfseo.onPage.resources([{ id: onPageTaskId }])));
			it("should be able to get duplicate tags", async () => dfseoAPICheck(await dfseo.onPage.duplicate_tags([{ id: onPageTaskId }])));
			it("should be able to get duplicate content", async () => dfseoAPICheck(await dfseo.onPage.duplicate_content([{ id: onPageTaskId }])));
			it("should be able to get links", async () => dfseoAPICheck(await dfseo.onPage.links([{ id: onPageTaskId }])));
			it("should be able to get non-indexable", async () => dfseoAPICheck(await dfseo.onPage.non_indexable([{ id: onPageTaskId }])));
			it("should be able to get waterfall", async () => dfseoAPICheck(await dfseo.onPage.waterfall([{ id: onPageTaskId }])));
			it("should be able to get raw HTML", async () => dfseoAPICheck(await dfseo.onPage.raw_HTML([{ id: onPageTaskId }])));
		});
	});
});
// });
