import { Answer } from "../model/answer";

export class Answers {
    // Behaviour
    // Java
    // FrontEnd
    // SQL
    static get answers (): Answer[] {
        return [
            {
                'name': 'Conflict',
                'type': 'Behaviour',
                'content': `Conflicts at work frequently occur when you are on team are working together 
                on a team project. Each team member brings their own perspective to the project which sometimes 
                conflict with each other. 
                
                I have faced one of that. Few months back in my last job we started 
                rewriting an application which is used for insurance agents.  In that one of the stories is assigned 
                to one of my coworkers. He did the work and gave a demo in our design review meeting. When I saw that I
                felt If I have taken the story I would have done differently.
                
                So, I have asked few questions and there was a conflict came up. So, my manager asked me to do proof of 
                concept of my perspective. 
                
                I have taken up my time from other my stories and I did that proof of concept and demoed to the business, and they 
                really like my demo. 
                
                Then We had a fact check of my work and coworker work. we realized we should not 
                go personal. Since it is work related, we had our fact checks done which is performant and maintainable 
                code. So finally, we agreed to my solution, and we resolved the conflict and gave the best
                results to the business as a team.`
             },
            {
                'name': 'Achievement',
                'type': 'Behaviour',
                'content': `Our design team received some rather brutal feedback from a client, and everybody was feeling pretty disheartened about the amount of work we had already put in.

                Instead of allowing my peers to continue to wallow, I organized a meeting where we could all sit down and hash out the client’s revisions together and make sure we were all on the same page about what was being requested.
                
                Prior to that meeting, I also created a more digestible breakdown of the client’s requests and gathered the relevant resources to ensure that we had everything we needed to knock those changes out. Everybody left that meeting feeling far more accomplished and satisfied with our progress.`
            },
            {
                'name': 'Failure',
                'type': 'Behaviour',
                'content': 'blah blah blah'
            },
            {
                'name': 'More Work',
                'type': 'Behaviour',
                'content': `Yes, I did face that. In one of my iterations work I have taken multiple stories to work on.
                 At that time, I have prioritized my tasks and check what are my knowns and unknows for each story. 
                 Then I haver started working on easier story because when I complete one story, I can move that to 
                 testing so no one will have dependency on e they can start work especially testers. Then I will start 
                 working on complex stories. So, I will find out if that story is having a dependency 
                 on other stories then I will contact the specific person to get all details and I will update to date.`
            },
            {
                'name': 'Learn',
                'type': 'Behaviour',
                'content': ` Sure. Generally developers are everyday learners. What I do to if I need to learn a new topic. 
                            Firstly, I believe learning will be in two steps one is going through theoretical concepts and 
                            then implementing or practical. 
                            
                            So, I will go through the documentation and understand the concept 
                            after that I will start doing proof of concept by cloning the GitHub project given in the documentation. 
                                
                            Still If I don’t get a good grip on it, I will start reading articles, nowadays many people are writing 
                            articles which helps us to understand the concepts easily by comparing the concept with real life 
                            scenarios and other than the articles I do watch the YouTube videos on that topic and implement the topic.`
            },
            {
                'name': 'Hire',
                'type': 'Behaviour',
                'content': `“My impression based on the job description is that you need someone who can do
                 <key responsibility of the job>. In my last role, I did <similar task or accomplishment you’ve
                 done in the past>, so I’m confident I will be able to step into this role and begin contributing 
                 quickly for you. As a side note, I’m also personally very <interested/passionate> about 
                 <topic related to the job you’ll be doing>, so I’d be very excited for the 
                opportunity to step into this role.”`
            },
            {
                'name': 'Spring ErrorHandling',
                'type': 'Spring',
                'content': `
                @ExceptionHandler annotations is used to Exceptions throw exceptions by a Controller method which is mapped to the ControllerAdvice.

                
                For example if an exception occurs we don't want the caller to get the entire stack trace instead we can return the appropriate response status depending on the business logic.
                `
            },
            {
                'name': 'Spring ErrorHandling',
                'type': 'Spring',
                'content': `
                @ExceptionHandler annotations is used to Exceptions throw exceptions by a Controller method which is mapped to the ControllerAdvice.

                
                For example if an exception occurs we don't want the caller to get the entire stack trace instead we can return the appropriate response status depending on the business logic.
                `
            },
            {
                'name': 'IOC',
                'type': 'Spring',
                'content': `
                Spring container forms the core of the Spring Framework. The Spring container uses Dependency Injection (DI) for managing the application components by creating objects, wiring them together along with configuring and managing their overall life cycles.
                `
            },
            {
                'name': 'Spring Bean',
                'type': 'Spring',
                'content': `
                They are the objects forming the backbone of the user’s application and are managed by the Spring IoC container.
                Spring beans are instantiated, configured, wired, and managed by IoC container.

                Singleton: The scope of bean definition while using this would be a single instance per IoC container.
                Prototype: Here, the scope for a single bean definition can be any number of object instances.
                Request: The scope of the bean definition is an HTTP request.
                Session: Here, the scope of the bean definition is HTTP-session.
                Global-session: The scope of the bean definition here is a Global HTTP session.
                `
            },
            {
                'name': 'Java 8',
                'type': 'Java',
                'content': `
                Lambda Expressions
                    Lambda expression helps us to write our code in functional style. It provides a clear and concise way to implement methods.

                Functional Interface
                    An Interface that contains only one abstract method is known as functional interface. It can have any number of default and static methods.
                
                Optional
                    Java introduced a new class Optional in Java 8. It is a public final class which is used to deal with NullPointerException in Java application. 

                Streams
                To perform a sequence of operations over the elements of the data source and aggregate their results, we need three parts: the source, intermediate operation(s) and a terminal operation.
                Terminal opertions: 
                    toArray()
                    collect()
                    forEach()
                    findAny()
                    findFirst()
                `
            },
            {
                'name': 'final, finally & finalize',
                'type': 'Java',
                'content': `
                Final: If any restriction is required for classes, variables, or methods, the final keyword comes in handy

                Finally: It is the block present in a program where all the codes written inside it get executed irrespective of handling of exceptions.

                Finalize: Prior to the garbage collection of an object, the finalize method is called so that the clean-up activity is implemented. Example:
                `
            },
            {
                'name': 'String Pool',
                'type': 'Java',
                'content': `
                String pool is intended to decrease the temporary String object with the help of sharing. An immutable class is needed to facilitate sharing. The sharing of the mutable structures between two unknown parties is not possible. Thus, immutable Java String helps in executing the concept of String Pool.

                `
            },
            {
                'name': 'HashMap Internal',
                'type': 'Java',
                'content': `
                HashMap works on the principle of hashing, we have put(key, value) and get(key) method for storing and retrieving Objects from HashMap. When we pass Key and Value object to put() method on Java HashMap, HashMap implementation calls hashCode method on Key object and applies returned hashcode into its own hashing function to find a bucket location for storing Entry object, important point to mention is that HashMap in Java stores both key and value object as Map.Entry in a bucket which is essential to understand the retrieving logic.
                `
            },
            {
                'name': 'Actuator',
                'type': 'Spring',
                'content': `
                Spring boot uses actuator to provide “Management EndPoints” which helps the developer in going through the Application Internals, Metrics etc.
                `
            },
            {
                'name': 'Profiles',
                'type': 'Spring',
                'content': `
                Profiles are used to provide a way to segregate the different parts of the application configuration and make it available for various environments. So, basically, any @Component or a @Configuration can be marked with a @Profile to limit as it is loaded. Consider you have multiple environments,

                    Dev
                    QA
                    Stage
                    Production
                `
            },
            {
                'name': 'Security',
                'type': 'Spring',
                'content': `
                Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. 
                
                Spring makes use of the DelegatingFilterProxy for implementing security mechanisms. It is a Proxy for standard Servlet Filter, delegating to a Spring-managed bean that implements the Filter interface.
                `
            },
            {
                'name': 'HashSet vs TreeSet',
                'type': 'Java',
                'content': `
                HashSet and TreeSet are not synchronized and ensure that duplicates are not present, there are certain properties that distinguish a HashSet from a TreeSet.
                `
            },
            {
                'name': 'nth High',
                'type': 'SQL',
                'content': `
                select SAL from EMPLOYEE E1 where 
                (N - 1) = (select count(distinct(SAL)) 
                from EMPLOYEE E2 
                where E2.SAL > E1.SAL )
                `
            }
        ]
    }
}